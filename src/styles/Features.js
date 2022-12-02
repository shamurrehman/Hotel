const styles = {
  root: {
    maxWidth: "1340px",
    marginTop: "1.5em",
    textAlign: "center",
    margin: "0 auto",
    "& > h3": {
      color: "#f8961e",
      fontSize: "1.5em",
    },
    "& h2": {
      color: "#212529",
      fontSize: "1.8em",
    },
  },
  feature: {
    "@media(min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridRowGap: "15px",
      marginTop: "20px",
    },
    "@media(min-width: 1024px)": {
      marginTop: "25px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridRowGap: "15px",
    },
  },
};

export default styles;
