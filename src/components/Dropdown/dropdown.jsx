import * as React from 'react';
import Button from '@mui/material/Button';
import { Popover } from '@mui/material';

export default function DropdownMenu({
  anchorElm,
  isMenuOpen,
  btnLable,
  menuContainer,
  PaperProps,
  handleMenuOpen,
  handleMenuClose,
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
      <Button
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
      </Button>

      <Popover
        id={btnId}
        // sx={{ marginTop: '8px' }}
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
        }}
      >
        {menuContainer}
      </Popover>
    </>
  );
}
