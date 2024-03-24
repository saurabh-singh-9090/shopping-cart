import React from "react";
import { IonIcon } from "react-ion-icon";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { emptyCategoryProducts, productSearch } from "../redux/productAction";
import "./Navbar.css";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    navigate("./")
  };

  const data = useSelector((state) => state.cartData);

  const itemNo = data.reduce((sum, item) => sum + item[1], 0);
  console.log("data in redux", data);

  const homeHandler = () => {
    dispatch(emptyCategoryProducts());
    navigate("/");
  };

  return (
    <>
      <div className="nav_parent">
        <nav className="navbar">
          <div className="nav_logo">
            <IonIcon onClick={() => navigate("./")} name="diamond-outline" />
          </div>
          <div className="search_box">
            <input
              onChange={(event) => dispatch(productSearch(event.target.value))}
              type="text"
              placeholder="Search Products"
            />
          </div>
          <div className="nav_items">
            <div
              style={{ fontSize: "1.4em" }}
              onClick={homeHandler}
              className="nav_links"
            >
              <IonIcon name="home" />
            </div>

            <div onClick={() => navigate("/categories")} className="nav_links">
              Categories
            </div>
            {storedUserLoggedInInfo === "0" ? (
              <>
                <div onClick={() => navigate("/signup")} className="nav_links">
                  Signup
                </div>

                <div onClick={() => navigate("/login")} className="nav_links">
                  Login
                </div>
              </>
            ) : (
              <div onClick={logoutHandler} className="nav_links">
                Logout
              </div>
            )}

            <div onClick={() => navigate("/cart")} className="nav_links count">
              {itemNo}
            </div>

            <div
              onClick={() => navigate("/cart")}
              className="nav_links cart_logo"
            >
              <IonIcon name="bag-outline" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
