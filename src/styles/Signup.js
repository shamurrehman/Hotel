const styles = {
  root: {
    // backgroundColor: "#e9ecef",
    margin: "0em auto",
    // minWidth: "450px",
    // maxWidth: "450px",
    // minHeight: "400px",
    // maxHeight: "700px",
    height: "90vh",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "-5em",
    "@media(max-width: 640px)": {
      margin: "0em auto",
      width: "90%",
      height: "80vh",
      marginTop: "-3em",
    },
    "@media(min-width: 640px)": {
      minWidth: "450px",
      maxWidth: "450px",
    },
  },
  SignUpForm: {
    width: "90%",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "1.7em 0",
    position: "relative",
    "@media(max-width: 640px)": {
      padding: "1.2em 0",
    },
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: "0 auto",
    padding: "1em",
    fontSize: "1em",
    border: "1px solid #dee2e6",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#212529",
    // backgroundColor: "rgb(255,165,0, 0.8)",
    color: "white",
    // color: "black",
    fontWeight: "bold",
    transition: "0.3s ease",
    "@media(max-width: 640px)": {
      padding: "1.1em",
      fontSize: ".8em",
    },

    "& img": {
      width: "20px",
      // marginLeft: "-10px",
      marginRight: "10px",
    },
    "&:hover": {
      backgroundColor: "#343a40",
      // backgroundColor: "rgb(255,165,0, 1)",
      // color: "red",
    },
  },
  or: {
    position: "absolute",
    right: "50%",
    bottom: "20%",
    zIndex: "5",
    "@media(max-width: 640px)": {
      right: "50%",
      bottom: "18%",
    },
    "& span": {
      width: "40px",
      height: "20px",
      backgroundColor: "green",
    },
  },

  login: {
    backgroundColor: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "1.3em 3em",
    width: "80%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#adb5bd",
    "& button": {
      border: "none",
      backgroundColor: "transparent",
      fontWeight: "900",
      fontSize: ".9em",
      cursor: "pointer",
      color: "#212529",
      "&:hover": {
        color: "#495057",
      },
    },

    "@media(max-width: 640px)": {
      fontSize: ".9em",
      padding: "1.3em .7em",
      width: "75%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& button": {
        fontSize: ".8em",
      },
    },
  },

  error: {
    position: "absolute",
    zIndex: 4,
    top: "21%",
    color: "#e5383b",
    fontWeight: "bold",
    fontSize: "1.1em",
    "@media(max-width: 640px)": {
      fontSize: "1em",
      top: "23%",
    },
  },
};

export default styles;
