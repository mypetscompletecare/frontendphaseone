import React, { useState } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Container, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownMenu from '../Dropdown/dropdown';
import DogstabContainer from './NavbarTabs/DogstabContainer';
import SmallAnimalTabsContainer from './NavbarTabs/SmallAnimalTabsContainer';
import CatstabContainer from './NavbarTabs/CatstabContainer';
import LargeAnimaltabs from './NavbarTabs/LargeAnimaltabs';

// ----------------------------------------------------------------------

const AppBarStyle = styled((props) => <AppBar {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.navbar.light,
  boxShadow: 'none',
  paddingTop: '2px',
  minHeight: '40px',
  height: 'auto',
}));

export default function BottomAppbar() {
  const theme = useTheme();
  const [PageAnchor, setPageAnchor] = React.useState({
    dog: null,
    cats: null,
    largeAnimal: null,
    smallAnimal: null,
    brandOpen: null,
    consultant: null,
  });

  const DogOpen = Boolean(PageAnchor.dog);
  const CatOpen = Boolean(PageAnchor.cats);
  const LargeAnimalOpen = Boolean(PageAnchor.largeAnimal);
  const SmallAnimalOpen = Boolean(PageAnchor.smallAnimal);
  const BrandOpen = Boolean(PageAnchor.brandOpen);
  const ConsultantOpen = Boolean(PageAnchor.consultant);

  const handleClickOpen = (event) => {
    switch (event.currentTarget.id) {
      case 'Dogs':
        return setPageAnchor({
          dog: event.currentTarget,
          cats: null,
          largeAnimal: null,
          smallAnimal: null,
          brandOpen: null,
          consultant: null,
        });
      case 'Cats':
        return setPageAnchor({
          dog: null,
          cats: event.currentTarget,
          largeAnimal: null,
          smallAnimal: null,
          brandOpen: null,
          consultant: null,
        });
      case 'Smallanimal':
        return setPageAnchor({
          dog: null,
          cats: null,
          largeAnimal: null,
          smallAnimal: event.currentTarget.id,
          brandOpen: null,
          consultant: null,
        });
      case 'Largeanimal':
        return setPageAnchor({
          dog: null,
          cats: null,
          smallAnimal: null,
          largeAnimal: event.currentTarget,
          brandOpen: null,
          consultant: null,
        });
      case 'Brands':
        return setPageAnchor({
          dog: null,
          cats: null,
          smallAnimal: null,
          largeAnimal: null,
          brandOpen: event.currentTarget,
          consultant: null,
        });
      case 'Consultant':
        return setPageAnchor({
          dog: null,
          cats: null,
          smallAnimal: null,
          largeAnimal: null,
          brandOpen: null,
          consultant: event.currentTarget,
        });
      default:
        console.log('default runs');
        setPageAnchor({
          dog: null,
          cats: null,
          smallAnimal: null,
          largeAnimal: null,
        });
        break;
    }
  };
  const handleClose = () => {
    setPageAnchor({
      dog: null,
      cats: null,
      largeAnimal: null,
      smallAnimal: null,
      brandOpen: null,
      consultant: null,
    });
  };

  return (
    <AppBarStyle position="static">
      <>
        <Box component={Container}>
          <Grid container flex={'row'} justifyContent={'space-between'}>
            <Grid item xs={12}>
              <Grid container flex={'row'} justifyContent={'space-evenly'}>
                {/* //dog tap */}
                {/* <DropdownMenu
                  anchorElm={PageAnchor.dog}
                  btnLable="Dogs"
                  isMenuOpen={DogOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  // menuContainer={<DogstabContainer />}
                  menuContainer={<h1>Dog container</h1>}
                  fullWidthPopover={true}
                /> */}
                <DropdownMenu
                  anchorElm={PageAnchor.cats}
                  btnLable="Dogs"
                  isMenuOpen={DogOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<DogstabContainer />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.cats}
                  btnLable="Cats"
                  isMenuOpen={CatOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<CatstabContainer />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.smallAnimal}
                  btnLable="Small Animal"
                  isMenuOpen={SmallAnimalOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<SmallAnimalTabsContainer />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.largeAnimal}
                  btnLable="Large Animal"
                  isMenuOpen={LargeAnimalOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<LargeAnimaltabs />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.brandOpen}
                  btnLable="Brands"
                  isMenuOpen={BrandOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<LargeAnimaltabs />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.consultant}
                  btnLable="Consultant"
                  isMenuOpen={ConsultantOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<LargeAnimaltabs />}
                  fullWidthPopover={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    </AppBarStyle>
  );
}
