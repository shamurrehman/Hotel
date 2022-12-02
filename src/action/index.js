import axios from "axios";
export const FETCHITEMS = "FETCHITEMS";
export const FETCHALLITEMS = "FETCHALLITEMS";

export const fetchItems = () => {
  return async (dispatch) => {
    const res = await axios.get("/fooditems.json");

    dispatch({ type: FETCHITEMS, payload: res.data });
  };
};

export const fetchAllItems = () => {
  return async (dispatch) => {
    const res = await axios.get("/allFoodItems.json");

    dispatch({ type: FETCHALLITEMS, payload: res.data });
  };
};
