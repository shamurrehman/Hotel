const styles = {
  root: {
    marginTop: "2em",
    backgroundColor: "#495057",
    color: "white",
    padding: "1em 2em",
    maxWidth: "1340px",
    margin: "0 auto",

    "& h2": {
      margin: "10px 0",
      color: "#f8961e",
    },
    "@media(min-width: 768px)": {
      display: "flex",
      justifyContent: "space-between",
      "& h2": {
        fontSize: "1.4em",
      },
    },
  },
  links: {
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      width: "50%",
      "& a": {
        cursor: "pointer",
        color: "#dee2e6",
        transition: "all 200ms ease",
        fontSize: "1.2em",
        marginRight: "25px",
        "&:hover": {
          color: "#fff",
        },
      },
    },
    "@media(min-width: 768px)": {
      "& ul": {
        display: "flex",
        justifyContent: "space-between",
        "& a": {
          marginRight: "25px",
        },
      },
    },
  },
  contact: {
    "& p": {
      margin: "10px 0",
      color: "#dee2e6",
    },
  },
  div: {
    margin: "10px 0",
    "& span": {
      margin: "10px 0",
      color: "#dee2e6",
    },
  },
};

export default styles;
