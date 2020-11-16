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

  const deleteProduct = (productToDelete) => {
    let newBasket = basket.filter(
      (product) => product.id !== productToDelete.id
    );
    setBasket(newBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, addProduct, deleteProduct }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
