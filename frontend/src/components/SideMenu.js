import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SideMenu = () => {
  return (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Menu Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideMenu;