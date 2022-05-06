import { BottomNavigation, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
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
    setPage(1)    
  }, [searchParams]);

<<<<<<< HEAD

  //pagination

  const [page, setPage] = useState(1)
  const itemsPerPage = 3
  const count = Math.ceil(products.length / itemsPerPage)

  const handleChange = (e,p) => {
    console.log(p);
    setPage(p)

  }

=======
  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
>>>>>>> 22c64b65ccd52d878f30b40442644645f7939620

  function currentData(){
    const begin = (page - 1) * itemsPerPage
    const end =  begin + itemsPerPage;
    return products.slice(begin, end)

  }

  return (
    <>
<<<<<<< HEAD
    <Grid item md={9}>
      <Box  sx={{ display: 'flex', flexWrap: 'wrap', minHeight:'40vh', mb:'3.5vh' }}>
      {products ? (
        currentData().map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h2>Loading...</h2>
      )}
      </Box>


<Pagination count={count} variant="outlined" shape="rounded" onChange={handleChange} />
    </Grid>
  
=======
      <Grid item md={9}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '40vh',
            mb: '3.5vh',
          }}
        >
          {products ? (
            currentData().map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>

        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
      </Grid>
>>>>>>> 22c64b65ccd52d878f30b40442644645f7939620
    </>
  );
};

export default ProductList;
