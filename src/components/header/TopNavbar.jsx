import React from 'react';

import { useTheme, styled } from '@mui/material/styles';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography,
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

export default function TopAppbar() {
  const theme = useTheme();
  const [PageAnchor, setPageAnchor] = React.useState({
    supportCall: null,
  });
  const SupportCall = Boolean(PageAnchor.supportCall);

  return (
    <AppBarStyle position="static">
      <Toolbar>
        <Box component={Container} pt={1}>
          <Grid container flex={'row'} justifyContent={'space-between'}>
            <Grid item xs={4}>
              {/* <Typography variant="h6">Petclinic</Typography> */}
              <img
                src={brandLogo}
                alt="Brand Logo"
                style={{ width: 'auto', height: '40px' }}
              />
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
                <DropdownMenu
                  anchorElm={PageAnchor.supportCall}
                  startIcon={<SupportAgentIcon />}
                  btnLable="Support"
                  isMenuOpen={SupportCall}
                  handleMenuOpen={({ target }) =>
                    setPageAnchor({ supportCall: target })
                  }
                  handleMenuClose={() => setPageAnchor({ supportCall: null })}
                  menuContainer={<SupportTabContainer />}
                />

                <Button
                  startIcon={<PermIdentityOutlinedIcon />}
                  sx={{
                    textTransform: 'none',
                    color: theme.palette.text.primary,
                  }}
                >
                  {' '}
                  login
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
