const footerLayout = {
    container: {
      display: 'flex',
      minHeight: '100px',
      justifyContent: 'space-between',
      marginTop: "4rem",
      padding: "0.75rem",
      backgroundColor:"rgb(211, 212, 212)",
      paddingBottom:"2rem",
      fontSize: "13px"
    },
    // style for form container
    copyRight: {
        minHeight: "100px",
        backgroundColor:"#1976d2",
        color: "white",
        paddingBottom: "20px",
        textAlign: "center",
    },
    extraInfo: {
        paddingTop: "5px",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column",
        paddingTop: "20px"
    },
    smallFont: {
        fontSize: "10px",
    },
    anchor: {
        '& >a': {
            textDecoration: "none",
            color: "black",
        }
    }
  };
export default footerLayout;