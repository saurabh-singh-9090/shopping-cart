import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = (data) => {
  return {
    type: EMPTY_CART,
    data,
  };
};

export const removeItem = (data) => {
  return {
    type: "REMOVE_ITEM",
    data,
  };
};
