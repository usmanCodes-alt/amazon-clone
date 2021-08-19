import { useContext } from "react";
import CartContext from "../CartContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./CheckoutItem.css";

const CheckoutItem = ({ id, title, price, rating, image, quantity }) => {
  const cartCtx = useContext(CartContext);

  const incrementQuantity = () => {
    cartCtx.incrementItem(id);
  };

  const decrementQuantity = () => {
    cartCtx.decrementItem(id);
  };

  const removeItem = () => {
    cartCtx.removeItem(id);
  };

  return (
    <div className="checkoutItem__wrapper">
      <div className="checkoutItem">
        <img src={image} alt="product" />
        <div className="checkoutItem__description">
          <span>x{quantity}</span>
          <h4>{title}</h4>
          <small>
            <strong>${price}</strong>
          </small>
          <div className="checkoutItem__rating">
            {Array(rating)
              .fill()
              .map((_, index) => {
                return <p key={index}>⭐</p>;
              })}
          </div>
          <div className="checkoutItem__editButtons">
            <button onClick={incrementQuantity}>
              <AddIcon className="checkoutItem__icon" />
            </button>
            <button onClick={decrementQuantity}>
              <RemoveIcon className="checkoutItem__icon" />
            </button>
          </div>
        </div>
      </div>
      <button onClick={removeItem}>Remove from Cart</button>
    </div>
  );
};

export default CheckoutItem;
