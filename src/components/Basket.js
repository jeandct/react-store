import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const Basket = () => {
  const { basket, deleteProduct } = useContext(BasketContext);
  return (
    <div>
      <h2>Basket</h2>
      <div>
        {basket.map((product) => {
          return (
            <div key={product.id}>
              {product.title} : {product.price}{' '}
              <button onClick={() => deleteProduct(product)}> Delete </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
