import React from 'react';

import { Box, Grid, Paper, Typography } from '@mui/material';

export default function LargeAnimaltabs() {
  return (
    <Box component={Paper} sx={{ width: '100%', padding: '20px 10px' }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Cows
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Buffallow
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Bull
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Horse
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
