import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productCategory } from "../redux/productAction";
import "./CategoryPage.css";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiData = useSelector((state) => state.productData.productData);
  const categoryArray = [...new Set(apiData.map((item) => item.category))];

  // console.error("category Data : ", categoryData);
  const categoryCardClickHandler = (category) => {
    dispatch(productCategory(category));
    navigate("../");
  };

  const CategoryCard = (props) => {
    return (
      <div>
        <div className="category_card">
          <div>
            <div
              onClick={() => categoryCardClickHandler(props.productCategory)}
              className="category_name"
            >
              <h2>{props.productCategory.toUpperCase()}</h2>
              <p>SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="shop_page">
        {categoryArray.map((item) => (
          <CategoryCard productCategory={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
