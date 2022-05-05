import { Box, Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

<<<<<<< HEAD
  //pagination

  const [page, setPage] = useState(1);
  const itemsPerPage = 2;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (event, p) => {
    setPage(p);
  } 



  const currentData = () => {
      const begin = (page-1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return products.slice(begin, end)
  }

  return (
    <Grid item md={9}>
=======
  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <Grid item md={9}>
>>>>>>> ee2eddb5b921ca04348b1ebaa72bb029900a2e51
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '40vh',
            mb: '3.5vh',
          }}
        >
          {products ? (
<<<<<<< HEAD
            currentData().map((item) => <ProductCard item={item} key={item.id} />)
=======
            currentData().map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
>>>>>>> ee2eddb5b921ca04348b1ebaa72bb029900a2e51
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>

<<<<<<< HEAD
        <Pagination count={count} variant="outlined" shape="rounded" onChange={handleChange} page={page} />
      </Grid>
)};
=======
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
      </Grid>
    </>
  );
};
>>>>>>> ee2eddb5b921ca04348b1ebaa72bb029900a2e51

export default ProductList;
