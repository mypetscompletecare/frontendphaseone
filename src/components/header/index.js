import { Box } from '@mui/material';
import React from 'react';
import BottomAppbar from './BottomNavbar';
import TopAppbar from './TopNavbar';

export default function Header() {
  return (
    <Box>
      <TopAppbar />
      <BottomAppbar />
    </Box>
  );
}
