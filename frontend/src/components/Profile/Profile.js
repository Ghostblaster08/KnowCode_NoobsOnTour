import React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppNavbar from '../AppNavbar';
import Header from '../Header';
import SideMenu from '../SideMenu';
import AppTheme from '../../shared-theme/AppTheme';

const xThemeComponents = {};

export default function Profile(props) {
  // Inline styles
  const jumbotronStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem',
    marginBottom: '2rem',
    borderRadius: '0.3rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const jumbotronH1Style = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#343a40',
  };

  const jumbotronPStyle = {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginTop: '20px',
  };

  const btnPrimaryStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    textTransform: 'none',
    cursor: 'pointer',
  };

  const btnPrimaryHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const btnSecondaryStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#6c757d',
    border: 'none',
    color: '#fff',
    textTransform: 'none',
    cursor: 'pointer',
  };

  const btnSecondaryHoverStyle = {
    backgroundColor: '#5a6268',
  };

  const navbarStyle = {
    padding: '1rem 1.5rem',
    backgroundColor: '#343a40',
  };

  const navbarBrandStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navLinkStyle = {
    color: 'white',
    fontSize: '1.1rem',
    padding: '0.5rem 1rem',
  };

  const navLinkHoverStyle = {
    color: '#007bff',
  };

  const footerStyle = {
    padding: '1rem',
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  const containerStyle = {
    padding: '2rem 1rem',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-15px',
    marginLeft: '-15px',
  };

  const colMd4Style = {
    width: '33.3333%',
    padding: '15px',
    boxSizing: 'border-box',
  };

  const colMd4StyleMobile = {
    ...colMd4Style,
    width: '100%',
  };

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        {/* Side Panel */}
        <SideMenu />
        {/* Navbar */}
        <Box sx={navbarStyle}>
          <AppNavbar />
        </Box>
        {/* Main Content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            marginLeft: '240px',
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <Box sx={{ width: '100%' }}>
              {/* Jumbotron */}
              <Box style={jumbotronStyle}>
                <h1 style={jumbotronH1Style}>GreenGauge</h1>
                <p style={jumbotronPStyle}>
                  Welcome to GreenGauge! View and manage your account details here.
                </p>
                <Button
                  style={btnPrimaryStyle}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = btnPrimaryHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = btnPrimaryStyle.backgroundColor)}
                  onClick={() => alert('Learn More')}
                >
                  Learn More &raquo;
                </Button>
              </Box>

              {/* Followers Button */}
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  style={btnPrimaryStyle}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = btnPrimaryHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = btnPrimaryStyle.backgroundColor)}
                  onClick={() => alert('View Followers')}
                >
                  Followers
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      {/* Footer */}
      <Box style={footerStyle}>
        <p>© 2025 GreenGauge. All rights reserved.</p>
      </Box>
    </AppTheme>
  );
}