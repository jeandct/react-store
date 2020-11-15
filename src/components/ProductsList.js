import React, { useContext, useEffect } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import { ProductsContext } from '../contexts/ProductsContext';
import Basket from './Basket';
import './ProductsList.css';

const ProductsLists = () => {
  const { catalogue, getCatalogue } = useContext(ProductsContext);
  const { basket, dispatch } = useContext(BasketContext);

  useEffect(() => {
    getCatalogue();
  });

  const showCatalogue = () => {
    return catalogue.map((product) => {
      return (
        <div key={product.id} className='product-card'>
          <img src={product.image} alt={product.title} />
          <p>{product.price} €</p>
          <button
            onClick={() =>
              dispatch({
                type: 'add',
                id: product.id,
                title: product.title,
                price: product.price,
              })
            }
          >
            Add to Basket
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Catalogue</h1>
      {basket.length > 0 && <Basket />}
      <div className='products-container'>{showCatalogue()}</div>
    </div>
  );
};

export default ProductsLists;
