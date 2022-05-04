import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

const SideBar = () => {

  const[searchParams,setSearchParams]=useSearchParams();
 
  const [search, setSearch]=useState(searchParams.get('q')|| '');


  useEffect(() => {
    setSearchParams({
      q:search,
    })
  
    
  }, [search])
  


  return (<Grid item md={3}>
    <Paper sx={{p:2}}>
      <TextField
      fullWidth
      elevation={5}
        id="input-with-icon-textfield"
        label="Search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      /></Paper>
  </Grid>)
};

export default SideBar;