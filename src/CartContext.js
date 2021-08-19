import React from "react";

// This is the data that we want to share
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  user: null,
  loginUser: (user) => {},
  logoutUser: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  incrementItem: (id) => {},
  decrementItem: (id) => {},
});

export default CartContext;
