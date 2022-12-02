export const INCREMENTINCART = "increment_in_cart";

export const incrementInCart = (itemId, price) => {
  return {
    type: INCREMENTINCART,
    payload: {
      id: itemId,
      price,
    },
  };
};
