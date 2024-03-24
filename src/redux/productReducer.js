import {
  SHOW_PRODUCT_LIST,
  SEARCH_PRODUCT,
  CATEGORY_PRODUCT,
} from "./constants";
const initialState = {
  productData: [],
  filteredData: [],
  categoryData: [],
};
export const productData = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_LIST:
      console.warn("SHOW_PRODUCT_LIST condition", action.data.products);
      return {
        ...state,
        productData: action.data.products,
      };

    case SEARCH_PRODUCT:
      console.warn("SEARCH_PRODUCT condition", action);
      const searchResults = state.productData.filter((item) => {
        const itemName = item.title.toLowerCase();
        return itemName.includes(action.query.toLowerCase());
      });
      console.log("Search results", searchResults);
      return {
        ...state,
        filteredData: searchResults,
      };

    case CATEGORY_PRODUCT:
      console.warn("CATEGORY_PRODUCT condition", action);
      const categoryProducts = state.productData.filter((item) => {
        const itemName = item.category;
        return itemName.includes(action.category);
      });
      console.log("category product results", categoryProducts);
      return {
        ...state,
        filteredData: [],
        categoryData: categoryProducts,
      };

    case "CATEGORY_EMPTY":
      return {
        ...state,
        categoryData: [],
      };

    default:
      return state;
  }
};
