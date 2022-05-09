import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {useProducts} from '../../contexts/ProductContexProvider'
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {

  const {products, getProducts} = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid item sx={{justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}} md={9}>
      {products ? (
        products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))
      ) : (<h2>Loading...</h2>)}
    </Grid>
  );
};

export default ProductList;