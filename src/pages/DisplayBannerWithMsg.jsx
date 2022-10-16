import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ProductCart from '../components/Products/ProductCart';

export default function DisplayBannerWithMsg() {
  return (
    <div>
      DisplayBannerWithMsg
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={3}>
            <ProductCart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
