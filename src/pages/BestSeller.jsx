import { Container, Grid } from '@mui/material';
import React from 'react';
import ProductCart from '../components/Products/ProductCart';

export default function BestSeller() {
  return (
    <div>
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
