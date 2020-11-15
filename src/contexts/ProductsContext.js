import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);

  const getCatalogue = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setCatalogue(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <ProductsContext.Provider value={{ catalogue, getCatalogue }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
