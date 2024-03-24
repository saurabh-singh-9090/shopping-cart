import React from "react";
import { IonIcon } from "react-ion-icon";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty_cart_page">
      <div className="empty_cart">
        <IonIcon name="cart-outline" />
      </div>
      <div className="empty_message">Your Cart is empty!</div>
      <div className="shop_btn" onClick={() => navigate("/")}>
        Shop Now
      </div>
    </div>
  );
};

export default EmptyCart;
