import React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

const ListHeader = styled((props) => <ListItem {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  textTransform: 'capitalize',
  color: theme.palette.grey[900],
  cursor: 'pointer',
}));

const Listitem = styled((props) => <ListItem {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  textTransform: 'capitalize',
  color: theme.palette.grey[500],
  padding: '0px 16px',
  ':hover': {
    color: '#E65100',
    cursor: 'pointer',
    background: theme.palette.grey[50],
  },
}));

export default function SmallAnimalTabsContainer() {
  return (
    <Box component={Paper} sx={{ width: '100%', padding: '20px 10px' }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Rabbits
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Birds
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Fish
          </Typography>
        </Grid>
        <Grid item xs="auto" sm="auto">
          <img src="https://via.placeholder.com/150.png/" alt="Image1" />
          <Typography variant="body2" color={'primary'} align="center">
            Reptile
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
