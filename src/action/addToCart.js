export const ADDTOCART = "ADDTOCART";

export const addToCart = (item, quantity, price) => {
  return {
    type: ADDTOCART,
    payload: { item, quantity, price },
  };
};
