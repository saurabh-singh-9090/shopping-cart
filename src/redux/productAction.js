import { PRODUCT_LIST, SEARCH_PRODUCT, CATEGORY_PRODUCT } from "./constants";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
export const productCategory = (category) => {
  return {
    type: CATEGORY_PRODUCT,
    category,
  };
};

export const emptyCategoryProducts = () => {
  return {
    type: "CATEGORY_EMPTY",
  };
};
