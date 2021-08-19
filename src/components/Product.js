import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../CartContext";
import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);

  function addItem() {
    if (!cartCtx.user) {
      history.push("/login");
      return;
    }
    cartCtx.addItem({ id, title, price, rating, image });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>
            <strong>${price}</strong>
          </small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addItem}>Add to basket</button>
    </div>
  );
};

export default Product;
