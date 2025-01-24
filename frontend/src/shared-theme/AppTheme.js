import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AppTheme = ({ children, themeComponents }) => {
  const theme = createTheme({
    components: themeComponents,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;