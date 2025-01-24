    // src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Container, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GreenGauge
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/login-signup">Login/Signup</Button>
        <Button color="inherit" onClick={handleMenu}>
          Dropdown
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Action</MenuItem>
          <MenuItem onClick={handleClose}>Another action</MenuItem>
          <MenuItem onClick={handleClose}>Something else here</MenuItem>
        </Menu>
        <TextField label="Search" variant="outlined" size="small" sx={{ marginLeft: 2 }} />
        <Button color="inherit">Search</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
