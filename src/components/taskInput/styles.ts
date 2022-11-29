export const styles = () => {
  return {
    taskWrapper: {
      width: '90%',
      //border: '1px solid',
      background: '#ffffff',
      borderColor: 'gray',
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      marginBottom: '10px',
      fontSize: '15px',
      borderRadius: '20px',
    },
    taskContent: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      // paddingRight: '10px',
      marginBottom: '10px',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    buttonWrapper: {
      width: '75px',
      height: '90px',
      paddingTop: '15px',
      display: 'flex',
      // justifyContent: 'space-around',
      flexDirection: 'column',
    },
    addButton: {
      width: '75px',
      height: '25px',
      borderRadius: '15px',
      cursor: 'pointer',
      border: 'none',
      // marginLeft: '28px'
    },
    inputTask: {
      marginBottom: '5px',
      width: '100%',
      padding: '5px 5px',
      outline: 'none',
      fontSize: '16px',
      fontFamily: 'Poppins',
      fontWeight: '500',
    },
  };
};
