import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
  items: [],
  totalAmount: 0,
  user: null,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_USER") {
    const newUser = action.payload;
    return {
      ...state,
      user: newUser,
    };
  } else if (action.type === "REMOVE_USER") {
    return {
      items: [],
      totalAmount: 0,
      user: null,
    };
  } else if (action.type === "ADD") {
    let newTotalAmount = state.totalAmount;
    let itemAlreadyExists = -1;
    state.items.forEach((currentItem, index) => {
      if (currentItem.id === action.payload.id) {
        itemAlreadyExists = index;
      }
    });
    if (itemAlreadyExists !== -1) {
      // the item already exists in cart, increase its count.
      state.items[itemAlreadyExists] = {
        ...action.payload,
        quantity: state.items[itemAlreadyExists].quantity + 1,
      };
    } else {
      state.items.push({
        ...action.payload,
        quantity: 1,
      });
      newTotalAmount++;
    }
    return {
      ...state,
      items: state.items,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    state.items = state.items.filter(
      (currentItem) => currentItem.id !== action.id
    );
    return {
      ...state,
      items: state.items,
      totalAmount: state.totalAmount - 1,
    };
  } else if (action.type === "DECREMENT") {
    let newTotalAmount = state.totalAmount;
    let itemIndex = -1;
    let aboutToZero = false;
    let itemObject = {};

    state.items.forEach((currentItem, index) => {
      if (currentItem.id === action.id) {
        itemIndex = index;
        itemObject = currentItem;
        if (currentItem.quantity === 1) {
          aboutToZero = true;
        }
      }
    });
    if (aboutToZero) {
      newTotalAmount = --newTotalAmount;
      // remove item from array
      state.items = state.items.filter(
        (currentItem) => currentItem.id !== action.id
      );
    } else {
      state.items[itemIndex] = {
        ...itemObject,
        quantity: state.items[itemIndex].quantity - 1,
      };
    }
    return {
      ...state,
      items: state.items,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "INCREMENT") {
    let itemIndex = -1;

    state.items.forEach((currentItem, index) => {
      if (currentItem.id === action.id) {
        itemIndex = index;
      }
    });
    state.items[itemIndex] = {
      ...state.items[itemIndex],
      quantity: state.items[itemIndex].quantity + 1,
    };

    return {
      ...state,
      items: state.items,
      totalAmount: state.totalAmount,
    };
  } else {
    return state;
  }
};

const StateProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const userLoggedIn = (user) => {
    dispatchCartAction({ type: "ADD_USER", payload: user });
  };

  const userLoggedOut = () => {
    dispatchCartAction({ type: "REMOVE_USER" });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const incrementQuantity = (id) => {
    dispatchCartAction({ type: "INCREMENT", id: id });
  };

  const decrementQuantity = (id) => {
    dispatchCartAction({ type: "DECREMENT", id: id });
  };

  /**
   * this is the original state object which
   * gets updated when 'cartState (see line 114)
   * changed by the reducer'
   */
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    user: cartState.user,
    loginUser: userLoggedIn,
    logoutUser: userLoggedOut,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    incrementItem: incrementQuantity,
    decrementItem: decrementQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default StateProvider;
