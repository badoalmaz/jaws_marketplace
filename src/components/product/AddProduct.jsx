import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContexProvider';

const AddProduct = () => {
  
//   const {addProduct} = useProducts();

//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: 0,
//     picture: '',
//     type: '',
//   })

//   return (
//     <Box sx={{ width: '60vw', margin: '10vh auto' }}>
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         name='name'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         name='description'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Price"
//         variant="outlined"
//         name='price'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Picture"
//         variant="outlined"
//         name='picture'
//         onChange={handleInp}
//       />
//       <TextField
//         fullWidth
//         id="outlined-basic"
//         label="Type"
//         variant="outlined"
//         name='type'
//         onChange={handleInp}
//       />
//       <Button onClick={() => {
//           addProduct(product);
//           navigate('/products');
//         }}
//         variant="outlined" fullWidth size="large">
//         CREATE PRODUCT
//       </Button>
//     </Box>
//   );
// };

export default AddProduct;
