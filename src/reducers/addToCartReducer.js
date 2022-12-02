import { ADDTOCART } from "../action/addToCart";
import { DECREMENTINCART } from "../action/decrementInCart";
import { INCREMENTINCART } from "../action/incrementInCart";

const addToCartReducer = (
  state = { items: [], totalQuantity: 0, price: 0 },
  action
) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADDTOCART:
      const addedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === addedItem.item.id
      );

      if (existingItem) {
        const updateItem = state.items.filter((item) => {
          return item.id === addedItem.item.id
            ? {
                ...item,
                quantity: (item.quantity += addedItem.quantity),
              }
            : item;
        });

        return {
          ...state,
          totalQuantity: (state.totalQuantity += addedItem.quantity),
          price: (state.price += action.payload.price * addedItem.quantity),
          items: updateItem,
        };
      } else {
        return {
          ...state,
          totalQuantity: (state.totalQuantity += addedItem.quantity),
          price: (state.price += action.payload.price * addedItem.quantity),
          items: [...state.items, addedItem.item],
        };
      }

    case INCREMENTINCART:
      const id = action.payload.id;
      // const itemInCart = state.items.find((item) => item.id === id);
      // console.log(itemInCart);
      const updatedList = state.items.filter((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: (item.quantity += 1),
            }
          : item;
      });
      // state.totalQuantity++;
      return {
        ...state,
        items: updatedList,
        totalQuantity: (state.totalQuantity += 1),
        price: state.price + action.payload.price,
      };

    case DECREMENTINCART:
      const itemId = action.payload.id;
      // const itemInCart = state.items.find((item) => item.id === id);
      // console.log(itemInCart);
      const decrementList = state.items.filter((item) => {
        return item.id === itemId
          ? {
              ...item,
              quantity: (item.quantity -= 1),
            }
          : item;
      });
      // state.totalQuantity++;
      return {
        ...state,
        items: decrementList,
        totalQuantity: (state.totalQuantity -= 1),
        price: state.price - action.payload.price,
      };

    default:
      return state;
  }
};

export default addToCartReducer;
