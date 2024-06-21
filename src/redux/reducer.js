import { ADD_TO_CART, EMPTY_CART } from "./constants";

export const cartData = (cart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART action called", action);

      const newCart = [];
      let flag = true;
      for (let item of cart) {
        if (item[0] === action.data) {
          newCart.push([item[0], item[1] + 1]);
          flag = false;
        } else {
          newCart.push([item[0], item[1]]);
        }
      }
      if (flag) {
        newCart.push([action.data, 1]);
      }
      return [...newCart];

    case EMPTY_CART:
      console.log("EMPTY_CART action called", action);
      cart.length = 0;
      return [...cart];

    case "REMOVE_FROM_CART": {
      const newCart = [];
      for (let item of cart) {
        if (item[0] === action.data) {
          if (item[1] === 1) {
          } else {
            newCart.push([item[0], item[1] - 1]);
          }
        } else {
          newCart.push([item[0], item[1]]);
        }
      }
      return [...newCart];
    }

    case "REMOVE_ITEM": {
      const newCart = cart.filter((item) => item[0] !== action.data);
      return [...newCart];
    }

    default:
      return cart;
  }
};
