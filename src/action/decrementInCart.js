export const DECREMENTINCART = "decrement_in_cart";

export const decrementInCart = (itemId, price) => {
  return {
    type: DECREMENTINCART,
    payload: {
      id: itemId,
      price,
    },
  };
};
