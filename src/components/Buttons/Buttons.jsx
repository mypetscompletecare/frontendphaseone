import React from 'react';
import { Box, Button, Link, styled } from '@mui/material';

const ActionsBtn = styled((props) => <Button {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  textTransform: 'capitalize',
  cursor: 'pointer',
}));

export const ActionsBtns = ({ label, link, handleOnClick }) => {
  return (
    <ActionsBtn
      variant="contained"
      onClick={handleOnClick}
      Component={link ? Link : Box}
    >
      {label}
    </ActionsBtn>
  );
};
