import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './Theme/Theme';

const ThemeRoot = () => {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      };
    
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="themeRoot">
      <Switch onClick={switchTheme}/>
        </div>
    </ThemeProvider>
  );
}
  

export default ThemeRoot;