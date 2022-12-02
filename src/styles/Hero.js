const styles = {
  root: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // flexDirection: "column",
    textAlign: "center",
    padding: "2em",
    marginTop: "3em",
    "@media(min-width: 768px)": {
      display: "flex",
      textAlign: "left",
      justifyContent: "space-between",
      alignItems: "center",
    },
    maxWidth: "1340px",
    margin: "0 auto",
  },
  heading: {
    "& h1": {
      fontSize: "4em",
      color: "#212529",
      lineHeight: "1.2em",
    },
    "& p": {
      fontSize: ".9em",
      // color: "#212529",
      margin: "10px 0",
      color: "#495057",
      lineHeight: "1.5em",
      fontWeight: "500",
    },
    "& img": {
      width: "40px",
    },
    "@media(min-width: 768px)": {
      maxWidth: "400px",
      "& h1": {
        fontSize: "2.7em",
      },
      "& p": {
        fontSize: ".8em",
        // color: "#212529",
      },
      "& img": {
        width: "35px",
      },
    },
    "@media(min-width: 1024px)": {
      maxWidth: "600px",
      "& h1": {
        fontSize: "4em",
      },
      "& p": {
        fontSize: "1em",
        // color: "#212529",
      },
      "& img": {
        width: "45px",
      },
    },
    "@media(max-width: 500px)": {
      "& h1": {
        fontSize: "2em",
      },
      "& p": {
        fontSize: ".8em",
        // color: "#212529",
      },
      "& img": {
        width: "30px",
      },
    },
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
      margin: "1em 0",
      width: "70%",
    },
    "@media(min-width: 768px)": {
      "& img": {
        margin: "1em 0",
        width: "80%",
        maxWidth: "800px",
      },
    },
    "@media(min-width: 1024px)": {
      "& img": {
        width: "80%",
        maxWidth: "650px",
      },
    },
  },
};

export default styles;
