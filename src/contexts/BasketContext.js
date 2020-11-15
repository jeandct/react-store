import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addProduct = (product) => {
    setBasket((prevState) => {
      return [
        ...prevState,
        { id: product.id, title: product.title, price: product.price },
      ];
    });
  };

  const deleteProduct = (product) => {
    let newBasket = basket;
    let index = newBasket
      .map((product) => {
        return product.id;
      })
      .indexOf(product.id);
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, addProduct, deleteProduct }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
