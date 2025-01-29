// src/context/CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newCart = [...state.cart];
      const itemIndex = newCart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        newCart[itemIndex].quantity += 1;
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
      }

      const totalItems = newCart.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = newCart.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        totalItems,
        totalPrice,
      };
    }
    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter(item => item.id !== action.payload.id);
      const totalItems = newCart.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = newCart.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        totalItems,
        totalPrice,
      };
    }
    case 'UPDATE_QUANTITY': {
      const newCart = [...state.cart];
      const itemIndex = newCart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        newCart[itemIndex].quantity = action.payload.quantity;
      }

      const totalItems = newCart.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = newCart.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        ...state,
        cart: newCart,
        totalItems,
        totalPrice,
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
