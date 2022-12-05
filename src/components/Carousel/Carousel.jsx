import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Grid, Typography } from '@mui/material';
import image from '../../assets/images/carousel/Slider-1.webp';
import image2 from '../../assets/images/carousel/Slider-2.webp';
import image3 from '../../assets/images/carousel/Slider-3.webp';
import image4 from '../../assets/images/carousel/Slider-4.webp';

export default function CustomCarousel({ title }) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <OwlCarousel items={1} loop nav margin={8} dots>
                <div>
                  <img className="img" src={image} alt="Image1" />
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Typography>Hello world</Typography>
                    </Grid>
                  </Grid>
                </div>
              </OwlCarousel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
