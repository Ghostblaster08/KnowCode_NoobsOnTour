// src/components/Home.js
import React from 'react';
import { Container, Grid, Button, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ paddingTop: 8 }}>
      <Container>
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h3" gutterBottom>Welcome to GreenGauge!</Typography>
          <Typography variant="h6" paragraph>
            There's a lack of awareness about the repercussions of non-sustainable practices, the impact commercial products leave behind due to their carbon footprint. We educate people about the alternative and eco-sustainable practices they can follow.
          </Typography>
          <Button variant="contained" color="primary">Learn more</Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Scan to Educate</Typography>
            <Typography paragraph>
              Scan images of food items and see the number of carbon emitted.
            </Typography>
            <Button variant="outlined">View details</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">GreenBot</Typography>
            <Typography paragraph>
              A specialised AI chatbot who will be your friend in the journey of reducing carbon footprints.
            </Typography>
            <Button variant="outlined">View details</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Gamified interface and Quizzes</Typography>
            <Typography paragraph>
              Gamified interface such as exclusive badges/perks/points availed as rewards and quizzes held for educating people about sustainable practices.
            </Typography>
            <Button variant="outlined">View details</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
