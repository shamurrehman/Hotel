const styles = {
  root: {
    textAlign: "center",
    padding: "1em",
    "& > h2": {
      fontSize: "1.7em",
      margin: "20px 0",
      color: "#f8961e",
    },
    maxWidth: "1340px",
    margin: "0 auto",
  },
  gridConatiner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1em",
    "@media(min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "@media(min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
};

export default styles;
