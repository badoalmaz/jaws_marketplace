import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContexProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        products.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ProductList;
