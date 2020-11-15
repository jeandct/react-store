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
        let newState = state;
        let index = newState
          .map((product) => {
            return product.id;
          })
          .indexOf(action.id);
        newState.splice(index, 1);
        return newState;
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
