import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductsLists = () => {
  const { catalogue, getCatalogue } = useContext(ProductsContext);

  useEffect(() => {
    getCatalogue();
  });

  return <div>Catalogue</div>;
};

export default ProductsLists;
