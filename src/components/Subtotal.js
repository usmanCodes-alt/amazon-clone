import React, { Fragment, useContext } from "react";
import CartContext from "../CartContext";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  const cartCtx = useContext(CartContext);

  const getBasketTotal = () => {
    return cartCtx.items.reduce(
      (previousAmount, item) => item.quantity * item.price + previousAmount,
      0
    );
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({cartCtx.totalAmount} items): <strong>{value}</strong>
            </p>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
