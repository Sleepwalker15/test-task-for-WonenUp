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
    taskTile: {
      fontSize: '22px',
      marginBottom: '10px',
    },
    taskContent: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '10px',
      marginBottom: '10px',
    },
    taskDescription: {
      width: '40%',
    },
    statusDone: {
      width: '50px',
      background: '#b3ffb3',
      padding: '5px',
      borderRadius: '15px',
      textAlign: 'center',
      verticalAlign: 'middle',
      marginBottom: '10px',
    },
    statusProgress: {
      background: '#ff9999',
      width: '85px',
      padding: '3px',
      textAlign: 'center',
      borderRadius: '15px',
      verticalAlign: 'middle',
      marginBottom: '10px',
    },
    overdue: {
      width: '155px',
      padding: '5px',
      borderRadius: '15px',
      verticalAlign: 'middle',
      textAlign: 'center',
      background: '#ff9999',
      // marginBottom: '10px',
    },

    notOverdue: {
      width: '155px',
      padding: '5px',
      borderRadius: '15px',
      verticalAlign: 'middle',
      textAlign: 'center',
      background: '#b3ffb3',
      // marginBottom: '10px',
    },

    buttonWrapper: {
      width: '90px',
      height: '90px',
      paddingTop: '15px',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
    },
    taskButton: {
      width: '75px',
      height: '25px',
      borderRadius: '15px',
      cursor: 'pointer',
      border: 'none',
    },
  };
};
