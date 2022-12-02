const styles = {
  root: {
    maxWidth: "1340px",
    width: "90%",
    margin: "0 auto",
    marginTop: "4em",
  },
  content: {
    textAlign: "center",
    marginTop: "3em",
    padding: "1em",
    "& h2": {
      margin: "10px 0",
      color: "#212529",
    },
    "& > h3": {
      color: "#f8961e",
      fontSize: "1.5em",
    },
    "& p": {
      padding: ".6em",
    },
    "@media(min-width: 768px)": {
      textAlign: "left",
      "& h2": {
        fontSize: "2em",
      },
      "& > h3": {
        fontSize: "1.7em",
      },
      "& p": {
        padding: ".6em",
        paddingLeft: 0,
      },
    },
  },
  gridConatiner: {
    display: "grid",
    gridGap: ".5em",
    gridTemplateColumns: "1fr 1fr",
    "& img": {
      width: "100%",
      objectFit: "cover",
      borderRadius: "10px",
    },
    "@media(min-width: 768px)": {
      maxWidth: "600px",
      margin: "0 auto",
    },
    "@media(min-width: 1024px)": {
      maxWidth: "800px",
      margin: "0 12px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
};

export default styles;
