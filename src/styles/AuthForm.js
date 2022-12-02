export const styles = {
  root: {
    // backgroundColor: "lightblue",
    padding: "2.5em 1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",

    "& input": {
      color: "#343a40",
      width: "100%",
      marginBottom: "20px",
      padding: "1.2em 1em",
      fontSize: "1em",
      border: "1px solid #dee2e6",
      borderRadius: "10px",
    },
    "& input:focus": {
      outlineColor: "orange",
    },
    "& input::placeholder": {
      color: "#ced4da",
    },
    "@media(max-width: 640px)": {
      padding: "2.6em 1.5em",
      "& input": {
        marginBottom: "16px",
      },
    },
  },
  btn: {
    width: "100%",
    padding: "1.1em",
    fontSize: "1em",
    border: "1px solid #dee2e6",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#212529",
    // backgroundColor: "rgb(255,165,0, 0.8)",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: "#343a40",
      // backgroundColor: "rgb(255,165,0, 1)",
    },
    "@media(max-width: 640px)": {
      fontSize: ".9em",
    },
  },
  error: {
    position: "relative",
    zIndex: 4,
    top: "-10px",
    left: "11px",
    color: "#e5383b",
    fontWeight: "bold",
    fontSize: "1.1em",
    "@media(max-width: 640px)": {
      top: "-8px",
      left: "9px",
      fontWeight: "normal",
      fontSize: ".9em",
    },
  },
};
