const styles = {
  root: {
    transition: "all 200ms ease",
    "& img": {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    "&:hover": {
      backgroundColor: "#f8f9fac0",
    },
    // backgroundColor: "skyblue",
    padding: "1em",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    "& h2": {
      fontSize: "1.1em",
      color: "#adb5bd",
    },
    "& p": {
      marginTop: "7px",
      fontSize: "1.3em",
      color: "#495057",
    },
    "& > span": {
      fontWeight: "normal",
    },
  },
  price: {
    fontWeight: "bold",
  },
};

export default styles;
