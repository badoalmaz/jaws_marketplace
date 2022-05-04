import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid item md={9} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {products ? (
        products.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </Grid>
  );
};

export default ProductList;
