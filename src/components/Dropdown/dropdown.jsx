import * as React from 'react';
import Button from '@mui/material/Button';
import { Popover, styled } from '@mui/material';

const ButtonStyle = styled((props) => <Button {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  position: 'relative',
  textTransform: 'capitalize',
  fontFamily: 'Nunito',
  fontWeight: '700',
  color: theme.palette.text.primary,
}));

export default function DropdownMenu({
  anchorElm,
  isMenuOpen,
  btnLable,
  menuContainer,
  PaperProps,
  handleMenuOpen,
  handleMenuClose,
  fullWidthPopover,
  ...rest
}) {
  const [anchorEl, setAnchorEl] = React.useState(anchorElm ? anchorElm : null);
  //   const btnId =
  const createBtnId = (label) => {
    let str = label[0].toUpperCase() + label.slice(1).toLowerCase();
    return str.split(' ').join('');
  };

  const btnId = createBtnId(btnLable);
  console.log('btnId ===>', btnId);
  return (
    <>
      <ButtonStyle
        id={btnId}
        aria-controls={isMenuOpen ? btnId : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
        sx={{ textTransform: 'none' }}
        onClick={handleMenuOpen}
        onMouseOver={handleMenuOpen}
        // onMouseLeave={handleMenuClose}
        {...rest}
      >
        {btnLable}
      </ButtonStyle>

      <Popover
        id={btnId}
        onMouseLeave={handleMenuClose}
        anchorEl={anchorElm ? anchorElm : anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        style={{ pointerEvents: 'none' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        disableRestoreFocus
        PaperProps={{
          sx: {
            pointerEvents: 'auto',
          },
          style: fullWidthPopover && { width: '100%' },
        }}
      >
        {menuContainer}
      </Popover>
    </>
  );
}
