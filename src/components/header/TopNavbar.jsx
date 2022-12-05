import React, { useState } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  TextField,
  Toolbar,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DropdownMenu from '../Dropdown/dropdown';
import SupportTabContainer from './NavbarTabs/SupportTabContainer';

import brandLogo from '../../assets/images/logo.png.webp';

// ----------------------------------------------------------------------
const AppBarStyle = styled((props) => <AppBar {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.navbar.light,
}));

const NavButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.text.primary,
  fontWeight: 700,
  [theme.breakpoints.down('md')]: {
    minWidth: '24px',
  },
  // [theme.breakpoints.down('xs')]: {},
}));

export default function TopAppbar({ handleDrawerToggle }) {
  const theme = useTheme();
  const [searchData, setSearchDAta] = useState('');

  return (
    <AppBarStyle position="static">
      <Toolbar>
        <Box component={Container} pt={1}>
          <Grid container flex={'row'} justifyContent={'space-between'}>
            <Grid item xs={4} sm={3} md={2}>
              <img
                src={brandLogo}
                alt="Brand Logo"
                style={{ width: 'auto', height: '40px' }}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={5}>
              <TextField
                placeholder="Search ..."
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={4} sm={5} md={5}>
              <Grid container flex={'row'} justifyContent={'space-evenly'}>
                <NavButton startIcon={<SupportAgentIcon />}>
                  <Hidden mdDown>Support</Hidden>
                </NavButton>
                <NavButton startIcon={<PermIdentityOutlinedIcon />}>
                  <Hidden mdDown>Login</Hidden>
                </NavButton>
                <NavButton
                  startIcon={
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  }
                  onClick={handleDrawerToggle}
                >
                  <Hidden mdDown>Cart</Hidden>
                </NavButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBarStyle>
  );
}
