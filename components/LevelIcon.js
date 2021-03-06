const LEVEL_SHAPES = [
  // Lv 1~5
  {
    width: 37,
    height: 39,
    // eslint-disable-next-line react/display-name
    renderContent: id => (
      <>
        <path
          d="M18.3 0C9 0 1.5 7.5 1.5 16.8C1.5 26.1 9.1 33.6 18.3 33.6C27.5 33.6 35.1 26 35.1 16.8C35.1 7.5 27.6 0 18.3 0Z"
          fill="#323232"
        />
        <path
          d="M19.2288 37.4766C28.4932 36.9626 35.5868 29.0355 35.0728 19.771C34.5587 10.5066 26.6317 3.41295 17.3672 3.92701C8.10274 4.44106 1.00913 12.3681 1.52319 21.6326C2.03724 30.8971 9.9643 37.9907 19.2288 37.4766Z"
          fill="#323232"
        />
        <path
          d="M18.3 30.2C10.9 30.2 4.90002 24.2 4.90002 16.8C4.90002 9.40002 10.9 3.40002 18.3 3.40002C25.7 3.40002 31.7 9.40002 31.7 16.8C31.7 24.2 25.7 30.2 18.3 30.2Z"
          fill={`url(#${id})`}
        />
        <path
          d="M18.3 27.9C24.4303 27.9 29.4 23.378 29.4 17.7999C29.4 12.2219 24.4303 7.69995 18.3 7.69995C12.1696 7.69995 7.19995 12.2219 7.19995 17.7999C7.19995 23.378 12.1696 27.9 18.3 27.9Z"
          fill="currentColor"
        />
        <path
          d="M19.5 29.1C19.5 28.5 19 27.9 18.3 27.9C17.6 27.9 17.1 28.4 17.1 29.1C17.1 29.8 17.6 30.3 18.3 30.3C19 30.3 19.5 29.7 19.5 29.1Z"
          fill="white"
        />
        <path
          d="M15.8001 11.7001C15.3001 11.2001 14.6001 11.2001 14.1001 11.7001C13.6001 12.2001 13.6001 12.9001 14.1001 13.4001L19.7001 19.0001C19.9001 19.2001 20.2001 19.3001 20.5001 19.3001C20.8001 19.3001 21.1001 19.2001 21.3001 19.0001C21.8001 18.5001 21.8001 17.8001 21.3001 17.3001L15.8001 11.7001Z"
          fill="white"
        />
        <path
          d="M12.4 16.3001C12.1 16.0001 11.7 16.0001 11.4 16.3001C11.1 16.6001 11.1 17.0001 11.4 17.3001L13.4 19.3001C13.5 19.4001 13.7 19.5001 13.9 19.5001C14.1 19.5001 14.3 19.4001 14.4 19.3001C14.7 19.0001 14.7 18.6001 14.4 18.3001L12.4 16.3001Z"
          fill="white"
        />
        <path
          d="M22.1 13L20.1 11C19.8 10.7 19.4 10.7 19.1 11C18.8 11.3 18.8 11.7 19.1 12L21.1 14C21.2 14.1 21.4 14.2 21.6 14.2C21.8 14.2 22 14.1 22.1 14C22.4 13.7 22.4 13.3 22.1 13Z"
          fill="white"
        />
      </>
    ),
  },
  // Lv 6~10
  {
    width: 32,
    height: 36,
    // eslint-disable-next-line react/display-name
    renderContent: id => (
      <>
        <path
          d="M6.29998 32.1C3.09998 32.1 0.599976 29.5 0.599976 26.4V15.7C0.599976 7.30002 7.49998 0.400024 15.9 0.400024C16.4 0.400024 16.9 0.400023 17.4 0.500023C25.1 1.20002 31.2 8.00002 31.2 16V26.3C31.2 29.5 28.6 32 25.5 32H6.29998V32.1Z"
          fill="#323232"
        />
        <path
          d="M6.29998 36C3.09998 36 0.599976 33.4 0.599976 30.3V19.6C0.599976 11.2 7.49998 4.30005 15.9 4.30005C16.4 4.30005 16.9 4.30005 17.4 4.40005C25.1 5.10005 31.2 11.9 31.2 19.9V30.2C31.2 33.4 28.6 35.9 25.5 35.9H6.29998V36Z"
          fill="#323232"
        />
        <path
          d="M6.30002 29.3001C4.70002 29.3001 3.40002 28.0001 3.40002 26.4001V15.7001C3.40002 8.80007 9.00002 3.20007 15.9 3.20007C16.3 3.20007 16.7 3.20008 17.1 3.30008C23.4 3.90008 28.4 9.50007 28.4 16.1001V26.4001C28.4 28.0001 27.1 29.3001 25.5 29.3001H6.30002Z"
          fill={`url(#${id})`}
        />
        <path
          d="M16.9 7.00003C10.6 6.50003 5.19995 11 5.19995 16.7V26.4C5.19995 27 5.69995 27.4 6.29995 27.4H25.4C26 27.4 26.5 27 26.5 26.4V17C26.5 11.9 22.4 7.50003 16.9 7.00003Z"
          fill="currentColor"
        />
        <path
          d="M5.79993 27.8C5.79993 27.3 5.39993 26.8 4.79993 26.8C4.29993 26.8 3.79993 27.2 3.79993 27.8C3.79993 28.3 4.19993 28.8 4.79993 28.8C5.39993 28.8 5.79993 28.4 5.79993 27.8Z"
          fill="white"
        />
        <path
          d="M27.8 27.8C27.8 27.3 27.4 26.8 26.8 26.8C26.3 26.8 25.8 27.2 25.8 27.8C25.8 28.3 26.2 28.8 26.8 28.8C27.4 28.8 27.8 28.4 27.8 27.8Z"
          fill="white"
        />
        <path
          d="M12.2 10.9C11.7 10.4 11 10.4 10.5 10.9C10 11.4 10 12.1 10.5 12.6L16.1 18.2C16.3 18.4 16.6 18.5 16.9 18.5C17.2 18.5 17.5 18.4 17.7 18.2C18.2 17.7 18.2 17 17.7 16.5L12.2 10.9Z"
          fill="white"
        />
        <path
          d="M8.69998 15.5C8.39998 15.2 7.99998 15.2 7.69998 15.5C7.39998 15.8 7.39998 16.2 7.69998 16.5L9.69998 18.5C9.79998 18.6 9.99998 18.7 10.2 18.7C10.4 18.7 10.6 18.6 10.7 18.5C11 18.2 11 17.8 10.7 17.5L8.69998 15.5Z"
          fill="white"
        />
        <path
          d="M18.3999 12.2L16.3999 10.2C16.0999 9.89998 15.6999 9.89998 15.3999 10.2C15.0999 10.5 15.0999 10.9 15.3999 11.2L17.3999 13.2C17.4999 13.3 17.6999 13.4 17.8999 13.4C18.0999 13.4 18.2999 13.3 18.3999 13.2C18.6999 12.9 18.6999 12.5 18.3999 12.2Z"
          fill="white"
        />
      </>
    ),
  },
  // Lv 11~15
  {
    width: 39,
    height: 39,
    // eslint-disable-next-line react/display-name
    renderContent: id => (
      <>
        <path
          d="M38.6 6.09999C38.4 4.89999 37.9 3.69999 37.2 2.79999C36.1 1.49999 34.6 0.799988 33 0.799988H6.00002C4.40002 0.799988 2.80003 1.49999 1.80003 2.79999C1.00003 3.69999 0.500024 4.89999 0.400024 6.09999V11.8C0.400024 12.1 0.400023 12.3 0.500023 12.6C2.00002 22.1 11.6 32.8 15.6 37C16.7 38.1 18.1 38.7 19.6 38.7C21.1 38.7 22.5 38.1 23.6 37C27.7 32.8 37.2 22.1 38.7 12.6C38.7 12.3 38.8 12.1 38.8 11.8V6.09999H38.6Z"
          fill="#323232"
        />
        <path
          d="M19.4 31.2C18.6 31.2 17.9 30.9 17.3 30.3C14.3 27.2 4.3 16.3 2.9 7.39999C2.7 6.39999 2.99999 5.30001 3.69999 4.60001C4.29999 3.90001 5.1 3.5 5.9 3.5H32.9C33.7 3.5 34.6 3.90001 35.1 4.60001C35.8 5.40001 36 6.39999 35.9 7.39999C34.5 16.4 24.5 27.2 21.5 30.3C20.9 30.9 20.2 31.2 19.4 31.2Z"
          fill={`url(#${id})`}
        />
        <path
          d="M34.2 8.49995C32.9 16.4 23.2 26.3 20.2 29.1C19.7 29.6 19 29.6 18.5 29.1C15.6 26.3 5.90004 16.4 4.50004 8.49995C4.30004 7.59995 5.00004 6.69995 5.80004 6.69995H19.3H32.8C33.7 6.69995 34.4 7.59995 34.2 8.49995Z"
          fill="currentColor"
        />
        <path
          d="M20.4 30.4C20.4 29.8 20 29.4 19.4 29.4C18.8 29.4 18.4 29.8 18.4 30.4C18.4 31 18.8 31.4 19.4 31.4C20 31.4 20.4 31 20.4 30.4Z"
          fill="white"
        />
        <path
          d="M4.90002 7.19995C4.90002 6.59995 4.50002 6.19995 3.90002 6.19995C3.30002 6.19995 2.90002 6.59995 2.90002 7.19995C2.90002 7.79995 3.30002 8.19995 3.90002 8.19995C4.40002 8.19995 4.90002 7.69995 4.90002 7.19995Z"
          fill="white"
        />
        <path
          d="M36 7.19995C36 6.59995 35.6 6.19995 35 6.19995C34.4 6.19995 34 6.59995 34 7.19995C34 7.79995 34.4 8.19995 35 8.19995C35.5 8.19995 36 7.69995 36 7.19995Z"
          fill="white"
        />
        <path
          d="M13.8 8.79999C13.3 8.29999 12.6 8.29999 12.1 8.79999C11.6 9.29999 11.6 9.99998 12.1 10.5L17.7 16.1C17.9 16.3 18.2 16.4 18.5 16.4C18.8 16.4 19.1 16.3 19.3 16.1C19.8 15.6 19.8 14.9 19.3 14.4L13.8 8.79999Z"
          fill="white"
        />
        <path
          d="M10.3 13.4C10 13.1 9.60001 13.1 9.30001 13.4C9.00001 13.7 9.00001 14.1 9.30001 14.4L11.3 16.4C11.4 16.5 11.6 16.6 11.8 16.6C12 16.6 12.2 16.5 12.3 16.4C12.6 16.1 12.6 15.7 12.3 15.4L10.3 13.4Z"
          fill="white"
        />
        <path
          d="M20.1 10.1L18.1 8.1C17.8 7.8 17.4 7.8 17.1 8.1C16.8 8.4 16.8 8.8 17.1 9.1L19.1 11.1C19.2 11.2 19.4 11.3 19.6 11.3C19.8 11.3 20 11.2 20.1 11.1C20.3 10.9 20.3 10.4 20.1 10.1Z"
          fill="white"
        />
      </>
    ),
  },
  // Lv 16~20
  {
    width: 38,
    height: 40,
    // eslint-disable-next-line react/display-name
    renderContent: id => (
      <>
        <path
          d="M37.1999 14.2C36.6999 12.6 35.2999 11.4 33.5999 11.2L26.1999 10.1L22.8999 3.40002C22.0999 1.90002 20.5999 0.900024 18.8999 0.900024C17.1999 0.900024 15.6999 1.80002 14.8999 3.40002L11.5999 10.1L4.19992 11.2C2.49992 11.4 1.09993 12.6 0.599934 14.2C0.099934 15.8 0.499925 17.6 1.69992 18.8L6.99993 24L5.69992 31.3C5.49993 32.6 5.79992 33.9 6.69992 34.9C7.59993 35.9 8.79993 36.5 10.0999 36.5C10.7999 36.5 11.4999 36.3 12.1999 36L18.7999 32.5L25.3999 36C25.9999 36.3 26.6999 36.5 27.4999 36.5C28.7999 36.5 30.0999 35.9 30.8999 34.9C31.6999 33.9 32.0999 32.6 31.8999 31.3L30.5999 24L35.8999 18.8C37.2999 17.5 37.7999 15.8 37.1999 14.2Z"
          fill="#323232"
        />
        <path
          d="M37.1999 17.1001C36.6999 15.5001 35.2999 14.3001 33.5999 14.1001L26.1999 13.0001L22.8999 6.30005C22.0999 4.80005 20.5999 3.80005 18.8999 3.80005C17.1999 3.80005 15.6999 4.70005 14.8999 6.30005L11.5999 13.0001L4.19992 14.1001C2.49992 14.3001 1.09993 15.5001 0.599934 17.1001C0.099934 18.7001 0.499925 20.5001 1.69992 21.7001L6.99993 26.9001L5.69992 34.2001C5.49993 35.5001 5.79992 36.8 6.69992 37.8C7.59993 38.8 8.79993 39.4001 10.0999 39.4001C10.7999 39.4001 11.4999 39.2001 12.1999 38.9001L18.7999 35.4001L25.3999 38.9001C25.9999 39.2001 26.6999 39.4001 27.4999 39.4001C28.7999 39.4001 30.0999 38.8 30.8999 37.8C31.6999 36.8 32.0999 35.5001 31.8999 34.2001L30.5999 26.9001L35.8999 21.7001C37.2999 20.4001 37.7999 18.7001 37.1999 17.1001Z"
          fill="#323232"
        />
        <path
          d="M20.3999 4.70005L23.9999 12C24.1999 12.5 24.6999 12.8 25.1999 12.9L33.2999 14.1C34.5999 14.3 35.0999 15.9 34.1999 16.8L28.3999 22.5C27.9999 22.9 27.8999 23.4 27.9999 23.9L29.3999 31.9C29.5999 33.2 28.2999 34.1 27.0999 33.5L19.8999 29.7C19.3999 29.5 18.8999 29.5 18.4999 29.7L11.2999 33.5C10.1999 34.1 8.7999 33.1 8.9999 31.9L10.3999 23.9C10.4999 23.4 10.2999 22.9 9.9999 22.5L4.1999 16.8C3.2999 15.9 3.79991 14.3 5.09991 14.1L13.1999 12.9C13.6999 12.8 14.0999 12.5 14.3999 12L17.9999 4.70005C18.1999 3.50005 19.7999 3.50005 20.3999 4.70005Z"
          fill={`url(#${id})`}
        />
        <path
          d="M20.0999 9.60005L22.8999 14.7001C23.0999 15.1001 23.4999 15.3 23.8999 15.3L30.0999 16.1C31.1999 16.2 31.5999 17.4 30.7999 18.1L26.2999 22.1C25.9999 22.4 25.8999 22.8001 25.8999 23.2001L26.8999 28.9C27.0999 29.9 25.9999 30.6001 24.9999 30.2001L19.4999 27.5C19.0999 27.3 18.6999 27.3 18.2999 27.5L12.7999 30.2001C11.8999 30.7001 10.6999 29.9 10.8999 28.9L11.8999 23.2001C11.9999 22.8001 11.7999 22.4 11.4999 22.1L6.99993 18.1C6.19993 17.4 6.69992 16.2 7.69992 16.1L13.8999 15.3C14.2999 15.2 14.6999 15.0001 14.8999 14.7001L17.6999 9.60005C18.2999 8.70005 19.6999 8.70005 20.0999 9.60005Z"
          fill="currentColor"
        />
        <path
          d="M11.4999 32.1C11.4999 31.4 10.9999 30.9 10.2999 30.9C9.59991 30.9 9.09991 31.4 9.09991 32.1C9.09991 32.8 9.59991 33.3 10.2999 33.3C10.8999 33.2 11.4999 32.7 11.4999 32.1Z"
          fill="white"
        />
        <path
          d="M28.7999 32.1C28.7999 31.4 28.2999 30.9 27.5999 30.9C26.8999 30.9 26.3999 31.4 26.3999 32.1C26.3999 32.8 26.8999 33.3 27.5999 33.3C28.1999 33.2 28.7999 32.7 28.7999 32.1Z"
          fill="white"
        />
        <path
          d="M6.89993 15.7C6.89993 15 6.39994 14.5 5.69994 14.5C4.99994 14.5 4.49994 15 4.49994 15.7C4.49994 16.4 4.99994 16.9 5.69994 16.9C6.39994 16.9 6.89993 16.4 6.89993 15.7Z"
          fill="white"
        />
        <path
          d="M34.1 15.7C34.1 15 33.5999 14.5 32.8999 14.5C32.1999 14.5 31.7 15 31.7 15.7C31.7 16.4 32.1999 16.9 32.8999 16.9C33.4999 16.9 34.1 16.4 34.1 15.7Z"
          fill="white"
        />
        <path
          d="M16.8999 16.1C16.3999 15.6 15.6999 15.6 15.1999 16.1C14.6999 16.6 14.6999 17.3 15.1999 17.8L20.7999 23.4C20.9999 23.6 21.2999 23.7 21.5999 23.7C21.8999 23.7 22.1999 23.6 22.3999 23.4C22.8999 22.9 22.8999 22.2 22.3999 21.7L16.8999 16.1Z"
          fill="white"
        />
        <path
          d="M13.4999 20.8C13.1999 20.5 12.7999 20.5 12.4999 20.8C12.1999 21.1 12.1999 21.5 12.4999 21.8L14.4999 23.8C14.5999 23.9 14.7999 24 14.9999 24C15.1999 24 15.3999 23.9 15.4999 23.8C15.7999 23.5 15.7999 23.1 15.4999 22.8L13.4999 20.8Z"
          fill="white"
        />
        <path
          d="M23.1999 17.5L21.1999 15.5C20.8999 15.2 20.4999 15.2 20.1999 15.5C19.8999 15.8 19.8999 16.2 20.1999 16.5L22.1999 18.5C22.2999 18.6 22.4999 18.7 22.6999 18.7C22.8999 18.7 23.0999 18.6 23.1999 18.5C23.4999 18.2 23.4999 17.8 23.1999 17.5Z"
          fill="white"
        />
      </>
    ),
  },
  // Lv 21~25
  {
    width: 41,
    height: 39,
    // eslint-disable-next-line react/display-name
    renderContent: id => (
      <>
        <path
          d="M38.7 14.3L30.5 6.09998C29.6 5.19998 28.3 4.59998 26.9 4.59998H14.1C12.8 4.59998 11.5 5.09998 10.5 6.09998L2.29997 14.3H0.0999756V18.6C0.0999756 19.9 0.599976 21.2 1.59998 22.2L16.9 37.5C17.9 38.4 19.1 39 20.5 39C21.8 39 23.1 38.5 24.1 37.5L39.4 22.2C40.4 21.2 40.9 20 40.9 18.6V14.3H38.7Z"
          fill="#323232"
        />
        <path
          d="M20.6 34.6C19.3 34.6 18 34.1 17 33.1L1.69995 17.8C0.699951 16.9 0.199951 15.6 0.199951 14.2C0.199951 12.9 0.699951 11.6 1.69995 10.6L10.6 1.70001C11.6 0.700012 12.8 0.200012 14.2 0.200012H27C28.3 0.200012 29.6 0.700012 30.6 1.70001L39.5 10.6C40.5 11.5 41 12.8 41 14.2C41 15.5 40.5 16.8 39.5 17.8L24.2 33.1C23.2 34.1 21.9 34.6 20.6 34.6Z"
          fill="#323232"
        />
        <path
          d="M20.6 31.8C20 31.8 19.4 31.6 19 31.1L3.7 15.8C3.3 15.4 3 14.8 3 14.2C3 13.6 3.2 13 3.7 12.6L12.6 3.70001C13 3.30001 13.6 3 14.2 3H27C27.6 3 28.2 3.20001 28.6 3.70001L37.5 12.6C37.9 13 38.2 13.6 38.2 14.2C38.2 14.8 38 15.4 37.5 15.8L22.2 31.1C21.7 31.6 21.2 31.8 20.6 31.8Z"
          fill={`url(#${id})`}
        />
        <path
          d="M4.99998 14.8L13.9 6.39999C14 6.29999 14.1 6.29999 14.2 6.29999H27C27.1 6.29999 27.2 6.29999 27.3 6.39999L36.2 14.8C36.4 15 36.4 15.2 36.2 15.3L20.9 29.8C20.7 30 20.5 30 20.3 29.8L4.99998 15.4C4.79998 15.2 4.79998 15 4.99998 14.8Z"
          fill="currentColor"
        />
        <path
          d="M21.6 30.8C21.6 30.2 21.2 29.8 20.6 29.8C20 29.8 19.6 30.2 19.6 30.8C19.6 31.4 20 31.8 20.6 31.8C21.1 31.8 21.6 31.3 21.6 30.8Z"
          fill="white"
        />
        <path
          d="M13.3 5C12.8 4.5 12.1 4.5 11.6 5C11.1 5.5 11.1 6.20001 11.6 6.70001L17.2 12.3C17.4 12.5 17.7 12.6 18 12.6C18.3 12.6 18.6 12.5 18.8 12.3C19.3 11.8 19.3 11.1 18.8 10.6L13.3 5Z"
          fill="white"
        />
        <path
          d="M9.89993 9.6C9.59993 9.3 9.19993 9.3 8.89993 9.6C8.59993 9.9 8.59993 10.3 8.89993 10.6L10.8999 12.6C10.9999 12.7 11.1999 12.8 11.3999 12.8C11.5999 12.8 11.7999 12.7 11.8999 12.6C12.1999 12.3 12.1999 11.9 11.8999 11.6L9.89993 9.6Z"
          fill="white"
        />
        <path
          d="M19.5999 6.29995L17.5999 4.29995C17.2999 3.99995 16.8999 3.99995 16.5999 4.29995C16.2999 4.59995 16.2999 4.99995 16.5999 5.29995L18.5999 7.29995C18.6999 7.39995 18.8999 7.49996 19.0999 7.49996C19.2999 7.49996 19.4999 7.39995 19.5999 7.29995C19.8999 7.09995 19.8999 6.59995 19.5999 6.29995Z"
          fill="white"
        />
        <path
          d="M22.6 3.90002C22.1 3.40002 21.4 3.40002 20.9 3.90002C20.4 4.40002 20.4 5.10004 20.9 5.60004L26.5 11.2C26.7 11.4 27 11.5 27.3 11.5C27.6 11.5 27.9 11.4 28.1 11.2C28.6 10.7 28.6 10 28.1 9.50003L22.6 3.90002Z"
          fill="white"
        />
        <path
          d="M21.8 9.80001C21.5 9.50001 21.1 9.50001 20.8 9.80001C20.5 10.1 20.5 10.5 20.8 10.8L22.8 12.8C22.9 12.9 23.1 13 23.3 13C23.5 13 23.7 12.9 23.8 12.8C24.1 12.5 24.1 12.1 23.8 11.8L21.8 9.80001Z"
          fill="white"
        />
      </>
    ),
  },
];

const COLOR = [
  // Lv. 5n+1
  '#FFB600',
  // Lv. 5n+2
  '#02D88B',
  // Lv. 5n+3
  '#2079F0',
  // Lv. 5n+4
  '#966DEE',
  // Lv. 5n
  '#FB595A',
];

const GRADIENT = [
  // Lv. 5n+1
  <>
    <stop stopColor="#FFEA29" />
    <stop offset="0.0967848" stopColor="#FFEB31" />
    <stop offset="0.2488" stopColor="#FFED48" />
    <stop offset="0.4369" stopColor="#FFF16C" />
    <stop offset="0.6539" stopColor="#FFF69F" />
    <stop offset="0.8923" stopColor="#FFFCDF" />
    <stop offset="1" stopColor="white" />
  </>,
  // Lv. 5n+2
  <>
    <stop stopColor="#4FF695" />
    <stop offset="0.1113" stopColor="#57F69A" />
    <stop offset="0.286" stopColor="#6EF8A7" />
    <stop offset="0.5023" stopColor="#92F9BE" />
    <stop offset="0.7511" stopColor="#C5FCDC" />
    <stop offset="1" stopColor="white" />
  </>,
  // Lv. 5n+3
  <>
    <stop stopColor="#5ED8FF" />
    <stop offset="0.1186" stopColor="#66DAFF" />
    <stop offset="0.3047" stopColor="#7DDFFF" />
    <stop offset="0.5352" stopColor="#A1E8FF" />
    <stop offset="0.7984" stopColor="#D4F4FF" />
    <stop offset="1" stopColor="white" />
  </>,
  // Lv. 5n+4
  <>
    <stop stopColor="#A98AFF" />
    <stop offset="0.149" stopColor="#AF92FF" />
    <stop offset="0.3828" stopColor="#BFA9FF" />
    <stop offset="0.6721" stopColor="#DACDFF" />
    <stop offset="1" stopColor="white" />
  </>,
  // Lv. 5n
  <>
    <stop stopColor="#FF7B7B" />
    <stop offset="0.1366" stopColor="#FF8383" />
    <stop offset="0.3511" stopColor="#FF9A9A" />
    <stop offset="0.6166" stopColor="#FFBEBE" />
    <stop offset="0.9201" stopColor="#FFF1F1" />
    <stop offset="1" stopColor="white" />
  </>,
];

/**
 *
 * @param {number} props.level
 * @param {number} props.width
 * @param {number} props.height
 * @param {string?} props.id - The ID for gradient. Must be different for each different <LevelIcon> on one page.
 */
function LevelIcon({
  level,
  width = 24,
  height = 24,
  id = '',
  style,
  ...props
}) {
  const levelShapeIdx = Math.floor((level - 1) / 5);
  const colorIdx = (level - 1) % 5;
  const gradientIdx = `gradient-${id}`;

  // Render nothing for invalid levels or level 0
  if (!level || !LEVEL_SHAPES[levelShapeIdx]) return null;

  const {
    width: viewBoxWidth,
    height: viewBoxHeight,
    renderContent,
  } = LEVEL_SHAPES[levelShapeIdx];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style, color: COLOR[colorIdx] }}
      {...(id ? { id: `${id}` } : {})}
      {...props}
    >
      {renderContent(gradientIdx)}
      <defs>
        <linearGradient
          id={gradientIdx}
          x1="0"
          y1="30.2724"
          x2="0"
          y2="2.31382"
          gradientUnits="userSpaceOnUse"
        >
          {GRADIENT[colorIdx]}
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LevelIcon;
