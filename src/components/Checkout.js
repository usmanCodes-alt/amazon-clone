import React, { useContext } from "react";
import CartContext from "../CartContext";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkout__left">
        {cartCtx.totalAmount !== 0 ? (
          cartCtx.items.map((currentItem) => {
            return (
              <CheckoutItem
                id={currentItem.id}
                title={currentItem.title}
                price={currentItem.price}
                rating={currentItem.rating}
                image={currentItem.image}
                quantity={currentItem.quantity}
              />
            );
          })
        ) : (
          <h1 className="checkout__emptyCartMessage">Your cart is Empty!</h1>
        )}
      </div>
      {cartCtx.totalAmount !== 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
