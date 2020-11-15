import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const Basket = () => {
  const { basket, dispatch } = useContext(BasketContext);
  return (
    <div>
      <h2>Basket</h2>
      <div>
        {basket.map((product) => {
          return (
            <div key={product.id}>
              {product.title} : {product.price}{' '}
              <button
                onClick={() => dispatch({ type: 'delete', id: product.id })}
              >
                {' '}
                Delete{' '}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
