import { Box } from '@mui/material';
import React from 'react';
import BottomAppbar from './BottomNavbar';
import RightSidebar from './RightSidebar';
import TopAppbar from './TopNavbar';

export default function Header() {
  const [rightSideDrawer, setRightSideDrawer] = React.useState(false);
  const handleDrawerToggle = () => {
    setRightSideDrawer(!rightSideDrawer);
  };
  return (
    <Box>
      <TopAppbar handleDrawerToggle={handleDrawerToggle} />
      <BottomAppbar />
      <RightSidebar
        rightSideDrawer={rightSideDrawer}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
}
