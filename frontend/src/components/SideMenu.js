import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: 240, // Fixed width for the side panel
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => alert('Community Challenges')}
      >
        Community Challenges
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => alert('Quizzes')}
      >
        Quizzes
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => alert('AI Bot')}
      >
        AI Bot
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => alert('Leaderboard')}
      >
        Leaderboard
      </Button>
      {/* Followers Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => alert('Followers')}
      >
        Followers
      </Button>
    </Box>
  );
};

export default SideMenu;
