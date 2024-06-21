import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SHOW_PRODUCT_LIST } from "./constants";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  console.log("API is called", data);
  yield put({ type: SHOW_PRODUCT_LIST, data: data });
}
// function* searchProducts(data) {
//   let result = yield fetch(`https://dummyjson.com/products?q=${data.query}`);
//   result = yield result.json();
//   console.log("search action is called", result);
//   yield put({ type: SHOW_PRODUCT_LIST, data: result });
// }

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  // yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
