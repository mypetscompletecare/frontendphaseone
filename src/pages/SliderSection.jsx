import React from 'react';
import { styled } from '@mui/system';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box, Button, Grid, Typography } from '@mui/material';

import image from '../assets/images/carousel/Slider-1.webp';
import image2 from '../assets/images/carousel/Slider-2.webp';
import image3 from '../assets/images/carousel/Slider-3.webp';
import image4 from '../assets/images/carousel/Slider-4.webp';

const CustomeImage = styled((props) => <img alt={props.altTitle} {...props} />)(
  ({ theme }) => ({
    width: '100%',
    height: 'auto',
  })
);

export default function SliderSection({ title }) {
  return (
    <div>
      <Grid coantainer>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <OwlCarousel items={1} loop nav margin={8} dots>
                <div style={{ position: 'relative' }}>
                  <CustomeImage src={image2} alt="Image1" />
                  <Grid
                    container
                    sx={{
                      position: 'absolute',
                      top: '80px',
                      left: '0px',
                    }}
                  >
                    <Grid item xs={12} sm={12}>
                      <Typography
                        variant="h4"
                        align="center"
                        sx={{ margin: '20px 0px' }}
                      >
                        Gurantee Classified Products
                      </Typography>
                      <Typography variant="h6" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores, cumque!
                      </Typography>
                      <Box mt={2} sx={{ textAlign: 'center' }}>
                        <Button variant="contained">Shop now</Button>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ position: 'relative' }}>
                  <CustomeImage src={image} alt="Image1" />
                  <Grid
                    container
                    sx={{
                      position: 'absolute',
                      top: '80px',
                      left: '0px',
                    }}
                  >
                    <Grid item xs={12} sm={12}>
                      <Typography
                        variant="h4"
                        align="center"
                        sx={{ margin: '20px 0px' }}
                      >
                        Gurantee Classified Products
                      </Typography>
                      <Typography variant="h6" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores, cumque!
                      </Typography>
                      <Box mt={2} sx={{ textAlign: 'center' }}>
                        <Button variant="contained">Shop now</Button>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ position: 'relative' }}>
                  <CustomeImage src={image3} alt="Image3" />
                  <Grid
                    container
                    sx={{
                      position: 'absolute',
                      top: '80px',
                      left: '0px',
                    }}
                  >
                    <Grid item xs={12} sm={12}>
                      <Typography
                        variant="h4"
                        align="center"
                        sx={{ margin: '20px 0px' }}
                      >
                        Gurantee Classified Products
                      </Typography>
                      <Typography variant="h6" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores, cumque!
                      </Typography>
                      <Box mt={2} sx={{ textAlign: 'center' }}>
                        <Button variant="contained">Shop now</Button>
                      </Box>
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
