const styles = {
  root: {
    cursor: "pointer",
    backgroundColor: "#f8961e",
    width: "fit-content",
    margin: "0 auto",
    marginTop: "10px",
    color: "white",
    padding: ".4em 1.5em",
    borderRadius: "15px",
    transition: "all 200ms ease",
    // boxShadow: " inset 0px 0px 157px 14px rgba(255,238,50,1)",
    boxShadow:
      "rgba(255,238,50,1) 0px 50px 100px -20px, rgba(255,238,50,.5) 0px 30px 60px -30px, rgba(255,238,50,.35) 0px -2px 6px 0px inset",
    "&:hover": {
      backgroundColor: "rgba(248, 150, 30, 0.697)",
    },
  },
};

export default styles;
