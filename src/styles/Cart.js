const styles = {
  root: {
    backgroundColor: "white",
    margin: "0 auto",
    width: "100%",
    // padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "800px",
    borderRadius: "10px",
    position: 'relative'
  },
  product: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e9ecef",
    margin: "10px 0",
    borderRadius: "10px",
    padding: "10px",
    "& div button": {
      padding: ".5em .8em",
      fontSize: "1em",
      fontWeight: "bold",
      color: "white",
      border: 0,
      cursor: "pointer",
      transition: "all 200ms ease",
      backgroundColor: "#ced4da",
      "&:hover": {
        backgroundColor: "#dee2e6",
        color: "black",
      },
    },
    "& div > span": {
      padding: "0 .8em",
    },
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& img": {
      borderRadius: "10px",
      marginRight: "10px",
    },
    "& h2": {
      fontSize: "1.1em",
      color: "#6c757d",
    },
  },
};

export default styles;
