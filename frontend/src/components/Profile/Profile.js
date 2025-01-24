import React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../AppNavbar'; // Adjust the path according to your file structure
import Header from '../Header'; // Adjust the path according to your file structure
import SideMenu from '../SideMenu'; // Adjust the path according to your file structure
import AppTheme from '../../shared-theme/AppTheme'; // Adjust the path according to your file structure
const xThemeComponents = {};

export default function Profile(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
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
              <h1>User Profile</h1>
              <p>Welcome to your profile page. Here you can view and edit your account details.</p>
              {/* Add more profile-related content here */}
            </Box>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}