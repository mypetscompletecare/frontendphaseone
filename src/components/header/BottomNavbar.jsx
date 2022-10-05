import React, { useState } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Container, Grid, Paper } from '@mui/material';
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
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
  // border: '1px solid red',
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
  });

  const DogOpen = Boolean(PageAnchor.dog);
  const CatOpen = Boolean(PageAnchor.cats);
  const LargeAnimalOpen = Boolean(PageAnchor.largeAnimal);
  const SmallAnimalOpen = Boolean(PageAnchor.smallAnimal);

  const handleClickOpen = (event) => {
    switch (event.currentTarget.id) {
      case 'Dogs':
        return setPageAnchor({
          dog: event.currentTarget.id,
          cats: null,
          largeAnimal: null,
          smallAnimal: null,
        });
      case 'Cats':
        return setPageAnchor({
          dog: null,
          cats: event.currentTarget,
          largeAnimal: null,
          smallAnimal: null,
        });
      case 'Smallanimal':
        return setPageAnchor({
          dog: null,
          cats: null,
          largeAnimal: null,
          smallAnimal: event.currentTarget.id,
        });
      case 'Largeanimal':
        return setPageAnchor({
          dog: null,
          cats: null,
          smallAnimal: null,
          largeAnimal: event.currentTarget,
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
    });
  };

  return (
    <AppBarStyle position="static">
      <>
        <Box component={Container}>
          <Grid container flex={'row'} justifyContent={'space-between'}>
            <Grid item xs={12}>
              <Grid container flex={'row'} justifyContent={'flex-start'}>
                {/* //dog tap */}
                <DropdownMenu
                  anchorElm={PageAnchor.dog}
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
                  btnLable="small animal"
                  isMenuOpen={SmallAnimalOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  handleMenuOpen={handleClickOpen}
                  handleMenuClose={handleClose}
                  menuContainer={<SmallAnimalTabsContainer />}
                  fullWidthPopover={true}
                />
                <DropdownMenu
                  anchorElm={PageAnchor.largeAnimal}
                  btnLable="large animal"
                  isMenuOpen={LargeAnimalOpen}
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
