const styles = {
  root: {
    textAlign: "center",
    backgroundColor: "white",
    width: "90%",
    margin: "1em auto",
    padding: "1em",
    borderRadius: "1em",
    cursor: "default",
    transition: "all 200ms ease",
    "&:hover": {
      backgroundColor: "#6c757d",
      color: "white",
    },
    // boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // boxShadow:
    //   " rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    boxShadow:
      " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    "& img": {
      width: "50px",
    },
    "& h3": {
      fontSize: "1.4em",
      margin: "10px 0",
    },
    "& p": {
      padding: "1em",
      fontSize: ".9em",
      margin: "10px 0",
    },
    "@media(min-width: 768px)": {
      width: "95%",
      margin: "0em auto",
      "& img": {
        width: "60px",
      },
      "& h3": {
        fontSize: "1.7em",
      },
      "& p": {
        padding: "1em",
        fontSize: ".9em",
      },
    },
  },
};

export default styles;
