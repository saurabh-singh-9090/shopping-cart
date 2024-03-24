import React from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeItem } from "../redux/actions";
import { IonIcon } from "react-ion-icon";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  const amount =
    cartData.length &&
    cartData.reduce((sum, curr) => sum + curr[0].price * curr[1], 0);

  const itemNo = cartData.reduce((sum, item) => sum + item[1], 0);

  

  // console.log(amount);
  // console.log("cart-data", cartData);
  return (
    <div>
      <div className="cart_page_container">
        {cartData.length ? (
          <>
            <div className="left">
              <table>
                <tr>
                  <div className="cart_header">
                    <td>
                      <div>
                        <span>Product</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Name</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Quantity</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>Price</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span></span>
                      </div>
                    </td>
                  </div>
                </tr>

                <div className="cart_items">
                  {cartData.map((item) => (
                    <tr>
                      <div key={item[0].id} className="cart_item">
                        <td>
                          <div>
                            <img
                              style={{ height: "100px", width: "70px" }}
                              src={item[0].thumbnail}
                              alt="Failed to load"
                            />
                          </div>
                        </td>
                        <td className="item_name">
                          <div>
                            <span>{item[0].title}</span>
                          </div>
                        </td>
                        <td>
                          <div className="cart_quantity">
                            <div
                              onClick={() => {
                                dispatch(removeFromCart(item[0]));
                              }}
                              className="quantity_change"
                            >
                              <IonIcon name="remove" />
                            </div>
                            <div className="quantity_change">{item[1]}</div>
                            <div
                              onClick={() => {
                                dispatch(addToCart(item[0]));
                              }}
                              className="quantity_change"
                            >
                              <IonIcon name="add" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>₹{item[0].price}</div>
                        </td>
                        <td>
                          <div
                            className="cart_trash_btn"
                            onClick={() => {
                              dispatch(removeItem(item[0]));
                            }}
                          >
                            <IonIcon name="trash-outline" />
                          </div>
                        </td>
                      </div>
                    </tr>
                  ))}
                </div>
              </table>
            </div>
            <div className="price_details">
              <div className="buy_btn">CHECKOUT</div>
              <div className="adjust_price">
                <span>Price({itemNo} items)</span>
                <span>₹{amount}</span>
              </div>
              <div className="adjust_price">
                <span>Discount(15%)</span>
                <span style={{ color: "green" }}>
                  -₹{Math.round(amount / 15)}
                </span>
              </div>
              <div className="adjust_price">
                <span>Total</span>&nbsp;
                <span>₹{Math.round(amount - amount / 15)}</span>
              </div>
              {/* <div onClick={placeOrderHandler} className="buy_btn">PLACE ORDER</div> */}
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default CartPage;
