import React from 'react';

import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// ----------------------------------------------------------------------

const AppBarStyle = styled((props) => <AppBar {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,
}));

export default function TopAppbar() {
  const theme = useTheme();
  return (
    <AppBarStyle position="static">
      <Toolbar>
        <Box component={Container} pt={1}>
          <Grid container flex={'row'} justifyContent={'space-between'}>
            <Grid item xs={4}>
              <Typography variant="h6">Petclinic</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                placeholder="Search ..."
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container flex={'row'} justifyContent={'space-evenly'}>
                <Button
                  startIcon={<SupportAgentIcon />}
                  sx={{
                    textTransform: 'none',
                    color: theme.palette.text.primary,
                  }}
                >
                  {' '}
                  Support
                </Button>
                <Button
                  startIcon={<PermIdentityOutlinedIcon />}
                  sx={{
                    textTransform: 'none',
                    color: theme.palette.text.primary,
                  }}
                >
                  {' '}
                  Support
                </Button>
                <Button
                  startIcon={
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  }
                  sx={{
                    textTransform: 'none',
                    color: theme.palette.text.primary,
                  }}
                >
                  {' '}
                  Cart{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBarStyle>
  );
}
