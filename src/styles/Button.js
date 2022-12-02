const styles = {
  root: {
    margin: "20px auto",
    backgroundColor: "#f8961e",
    width: "fit-content",
    padding: ".8em 2em",
    borderRadius: "2em",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "all 200ms ease",
    "&:hover": {
      backgroundColor: "#f8961ed2",
    },
    "@media(min-width: 768px)": {
      margin: "20px 0",
    },
  },
};

export default styles;
