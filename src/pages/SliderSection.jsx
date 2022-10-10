import React from 'react';
import { styled } from '@mui/system';

import slider1 from '../assets/images/carousel/Slider-2.webp';

const AppBarStyle = styled((props) => <div {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.navbar.light,
}));

export default function SliderSection() {
  return (
    <div>
      <img
        src={slider1}
        alt="Slider1"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
