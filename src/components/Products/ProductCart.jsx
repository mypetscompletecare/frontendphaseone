import React from 'react';
import {
  Card,
  Grid,
  Stack,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { blue, red } from '@mui/material/colors';

import dogImage from '../../assets/images/Products/dog/PedigreeChicken_VegetablesAdultDryDogFood.webp';
import nonVegLogo from '../../assets/images/Products/non_veg.png';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

export default function ProductCart({}) {
  return (
    <Box>
      <Card>
        <Box style={{ position: 'relative' }}>
          <Grid
            direction="row"
            spacing={2}
            display="flex"
            justifyContent="space-between"
            style={{
              width: '100%',
              position: 'absolute',
              top: '0px',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              sx={{
                backgroundColor: red['500'],
                color: 'white',
                fontSize: '12px',
                padding: '4px 8px',
              }}
            >
              Get 15% off
            </Typography>
            <Typography
              sx={{
                backgroundColor: blue['A200'],
                color: 'white',
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '10%',
              }}
            >
              New
            </Typography>
          </Grid>
          <Grid
            direction="row"
            spacing={2}
            display="flex"
            justifyContent="space-between"
            style={{
              width: '100%',
              position: 'absolute',
              bottom: '10px',
              boxSizing: 'border-box',
            }}
          >
            <Typography>
              <img
                alt="non veg"
                src={nonVegLogo}
                style={{ width: '24px', height: 'auto' }}
              />
            </Typography>
          </Grid>
          <img
            alt="product"
            src={dogImage}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Box p={1}>
          {/* product name  */}
          <Typography
            variant="body1"
            component="h6"
            color="Primary"
            style={{ fontWeight: '600' }}
          ></Typography>
          {/* {product description } */}
          <Typography variant="body2" color="GrayText" gutterBottom>
            dolor sit, amet consectetur adipisicing elit. Voluptas eligendi odio
            impedit hic blanditiis. amet consectetur
          </Typography>
          {/* rating | review  */}

          <Grid container component={Box} mt={1} mb={2}>
            <Grid item xs={12}>
              <Typography
                color="GrayText"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'left',
                  fontSize: '14px',
                }}
              >
                <StarBorderOutlinedIcon style={{ color: 'goldenrod' }} />
                <StarBorderOutlinedIcon style={{ color: 'goldenrod' }} />
                <StarBorderOutlinedIcon style={{ color: 'goldenrod' }} />
                <StarBorderOutlinedIcon style={{ color: 'goldenrod' }} />
                <StarHalfOutlinedIcon style={{ color: 'goldenrod' }} />
                <span>{` | 4.9 | 26 reviews `}</span>
              </Typography>
            </Grid>
          </Grid>
          {/* options  add to cart */}
          <Grid container>
            <Grid item xs={12}>
              <Typography
                color={blue[800]}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    marginRight: '25px',
                    color: 'GrayText',
                    textDecoration: 'line-through',
                  }}
                >
                  <CurrencyRupeeOutlinedIcon sx={{ fontSize: '13px' }} />{' '}
                  {` 549 `}
                </span>
                <span style={{ fontWeight: 'bolder' }}>
                  <CurrencyRupeeOutlinedIcon sx={{ fontSize: '14px' }} />{' '}
                  {` 349 `}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} component={Box} mt={2} mb={1}>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Small"
                  variant="outlined"
                  color="primary"
                  size="small"
                />
                <Chip
                  label="Medium"
                  variant="outlined"
                  color="primary"
                  size="small"
                />
                <Chip label="Large" variant="outlined" size="small" />
              </Stack>
            </Grid>
            <Grid item xs={12} component={Box} my={2}>
              <Button
                fullWidth={true}
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
