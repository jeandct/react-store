import React, { createContext, useReducer } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const initialState = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          { id: action.id, title: action.title, price: action.price },
        ];
      case 'delete':
        return state.filter((product) => product.id !== action.id);

      default:
        return state;
    }
  };

  const [basket, dispatch] = useReducer(reducer, initialState);

  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
