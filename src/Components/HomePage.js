import React, { useEffect } from "react";
import { IonIcon } from "react-ion-icon";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { productList } from "../redux/productAction";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData.productData);
  const filteredData = useSelector((state) => state.productData.filteredData);
  const categoryData = useSelector((state) => state.productData.categoryData);

  console.log("data in homepage from saga", filteredData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  // console.error(categoryData.length);
  // const homeData =
  //   filteredData.length === 0 && categoryData.length === 0
  //     ? data
  //     : categoryData;
  // let homeData = filteredData.length === 0 && categoryData.length === 0 && data;
  // homeData =
  //   categoryData.length === 0 && filteredData.length !== 0 && filteredData;
  // homeData = categoryData.length !== 0 && categoryData;
  let homeData;
  if (filteredData.length !== 0) {
    homeData = filteredData;
  } else if (categoryData.length !== 0) {
    homeData = categoryData;
  } else if (filteredData.length === 0 && categoryData.length === 0) {
    homeData = data;
  }
  // const homeData = categoryData.length === 0 ? data : categoryData;

  return (
    <div className="homepage">
      <div className="products">
        {homeData.map((item) => (
          <div key={item.id} className="item">
            <img
              className="item_img"
              src={item.images[4] || item.images[0]}
              alt="Loading..."
            />
            <div className="item_price">
              <span>{item.title}</span>
              <span>₹{item.price}</span>
            </div>
            <div className="item_name">
              <i>{item.brand}</i>
            </div>
            <div className="item_desc"></div>
            <div className="item_btn">
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                <span style={{ fontSize: "1.2em" }}>
                  <IonIcon name="cart-outline" />
                </span>
                &nbsp;&nbsp; ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
