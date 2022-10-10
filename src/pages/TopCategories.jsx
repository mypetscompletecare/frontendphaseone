import React from 'react';
import { Box, styled } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import DisplayCategory from '../components/BrandDisplay/DisplayCategory';

import dogFood from '../assets/images/category/dogFod.webp';
import catFood from '../assets/images/category/catFood.webp';
import birdFood from '../assets/images/category/birdFood.webp';
import accessories from '../assets/images/category/accessories.webp';

const AppBarStyle = styled((props) => <div {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.navbar.light,
}));

export default function TopCategories() {
  return (
    <Box id="Top_Categories" mt={6} mb={4} component={Container}>
      <Grid container spacing={2} component={Box} mb={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {' '}
            Top Categories
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <DisplayCategory
            image={dogFood}
            title={'Dog Food'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur!'
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DisplayCategory
            image={catFood}
            title={'Cat Food'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur!'
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DisplayCategory
            image={birdFood}
            title={'Bird Food'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur!'
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <DisplayCategory
            image={accessories}
            title={'Accessories'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aspernatur!'
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
