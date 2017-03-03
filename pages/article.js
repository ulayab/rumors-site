import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import app from '../components/App';
import { load, submitReply, connectReply } from '../redux/articleDetail';

const TYPE_DESC = {
  NOT_ARTICLE: '這篇不是轉傳訊息或完整網路文章，如「這個要怎麼用」、或訊息的節錄片段。',
  NOT_RUMOR: '這篇確實是轉傳訊息或網路文章，但屬於心得感想、新知分享等，沒有不實資訊。',
  RUMOR: '含有內有不實資訊的轉傳訊息或網路文章。',
};

const TYPE_INSTRUCTION = {
  NOT_ARTICLE: '請簡單說明您為何認為這不是完整文章：',
  NOT_RUMOR: '請簡單說明為何您認為它沒有不實資訊：',
  RUMOR: '請簡單說明不實之處，作為「資料來源」的導讀：',
}

export default compose(
  app((dispatch, {query: {id}}) => dispatch(load(id))),
  connect(({articleDetail}) => ({
    isLoading: articleDetail.getIn(['state', 'isLoading']),
    isReplyLoading: articleDetail.getIn(['state', 'isReplyLoading']),
    data: articleDetail.get('data'),
  }), {
    submitReply, connectReply,
  }),
)(class ArticlePage extends React.Component {

  handleConnect = ({target: {value: replyId}}) => {
    console.log('connecting', replyId, this.props.query.id);
  }

  render() {
    const {
      data,
      isLoading,
      isReplyLoading,
      submitReply,
    } = this.props;

    const article = data.get('article');
    const replyConnections = data.get('replyConnections');
    const relatedArticles= data.get('relatedArticles');
    const relatedReplies = data.get('relatedReplies');

    if(isLoading && article === null) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <pre>{JSON.stringify(article.toJS(), null, '  ')}</pre>

        <section>
          <h1>回應</h1>
            {
              replyConnections.size ? (
              <ul>
                {
                  replyConnections.map(conn => (
                    <ReplyItem
                      key={conn.get('id')}
                      id={conn.get('id')}
                      reply={conn.get('reply')}
                      connectionAuthor={conn.get('user')}
                      feedbackCount={conn.get('feedbackCount')}
                    />
                  ))
                }
              </ul>
            ) : (
              <p>目前尚無回應</p>
            )
          }

          <ReplyForm onSubmit={submitReply} disabled={isReplyLoading} />
        </section>

        <section>


        </section>

      </div>
    );
  };
});


function ReplyItem({id, reply, connectionAuthor, feedbackCount}) {
  return (
    <li>
      {JSON.stringify(reply.toJS())}
      {connectionAuthor && JSON.stringify(connectionAuthor.toJS())}
      {feedbackCount}
    </li>
  )
}

const localStorage = typeof window === 'undefined' ? {} : window.localStorage;
class ReplyForm extends React.PureComponent {
  static defaultProps = {
    onSubmit() {return Promise.reject()},
    disabled: false,
  }

  constructor() {
    super();
    this.state = {
      replyType: 'NOT_ARTICLE',
      reference: '',
      text: '',
    };
  };

  componentDidMount() {
    const {replyType, reference, text} = this.state;

    // restore from localStorage if applicable.
    // We don't do this in constructor to avoid server/client render mismatch.
    //
    this.setState({
      replyType: localStorage.replyType || replyType,
      reference: localStorage.reference || reference,
      text: localStorage.text || text,
    });
  }

  set(key, value) {
    this.setState({[key]: value});

    // Backup to localStorage
    if(typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => localStorage[key] = value);
    }
  }

  handleTypeChange = ({target: {value}}) => {
    this.set('replyType', value);
  }

  handleTextChange = ({target: {value}}) => {
    this.set('text', value)
  }

  handleReferenceChange = ({target: {value}}) => {
    this.set('reference', value)
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevent reload
    if(this.props.disabled) return;
    const {replyType, reference, text} = this.state;
    this.props.onSubmit({type: replyType, reference, text}).then(() => {
      // Clean up localStorage on success
      delete localStorage.replyType;
      delete localStorage.reference;
      delete localStorage.text;
    });
  }

  render() {
    const { replyType, text, reference } = this.state;
    const { disabled } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <select name="type" defaultValue="NOT_ARTICLE" onChange={this.handleTypeChange}>
            <option value="NOT_ARTICLE">⚠️️ 非完整文章或訊息</option>
            <option value="NOT_RUMOR">⭕ 查無不實</option>
            <option value="RUMOR">❗ 含有不實訊息</option>
          </select>
          <span>：{TYPE_DESC[replyType]}</span>
        </p>

        <p>
          <label htmlFor="text">
            { TYPE_INSTRUCTION[replyType] }
          </label>
          <br />
          <textarea
            required
            id="text"
            placeholder="140 字以內"
            onChange={this.handleTextChange}
            value={text}
          />
        </p>

        {
          replyType === 'NOT_ARTICLE' ? '' : (
            <p>
              <label htmlFor="reference">
                資料來源：
              </label>
              <br />
              <textarea
                required
                id="reference"
                placeholder="超連結與連結說明文字"
                onChange={this.handleReferenceChange}
                value={reference}
              />
            </p>
          )
        }

        <button type="submit" disabled={disabled}>送出回應</button>

        <style jsx>{`
          textarea {
            /* 140 word = 28 * 5 */
            width: 28em;
            height: 5em;
          }
        `}</style>
      </form>
    );
  }
}