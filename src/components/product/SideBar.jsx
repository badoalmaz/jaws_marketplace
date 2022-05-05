import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >

        <FormControlLabel 
        value="all" 
        control={<Radio />} 
        label="all" />

        <FormControlLabel 
        value="telephone" 
        control={<Radio />} label="telephone" />

        <FormControlLabel 
        value="laptop" 
        control={<Radio />} 
        label="laptop" />
        
        <FormControlLabel 
        value="watch" 
        control={<Radio />} 
        label="watch" />

      </RadioGroup>
    </FormControl>
      </Paper>

    </Grid>
  );
};

export default SideBar;
