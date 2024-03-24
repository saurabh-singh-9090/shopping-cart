import { combineReducers } from "redux";
import { productData } from "./productReducer";
import { cartData } from "./reducer";

export const rootReducer = combineReducers({
  cartData,
  productData,
});
