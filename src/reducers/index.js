import { combineReducers } from "redux";
import { FETCHALLITEMS, FETCHITEMS } from "../action";
import addToCartReducer from "./addToCartReducer";

const itemsReducers = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case FETCHITEMS:
      return action.payload;
    default:
      return state;
  }
};

const allItemsReducers = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case FETCHALLITEMS:
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  items: itemsReducers,
  allItems: allItemsReducers,
  cart: addToCartReducer,
});
