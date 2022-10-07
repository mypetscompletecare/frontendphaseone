import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

let PetClinicTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    navbar: {
      light: '#fef8f0',
    },
    // secondary: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    info: {
      main: theme.palette.secondary.main,
    },
  },
  typography: {
    fontFamily: ['Nunito', 'PT Sans', 'Roboto', '"Helvetica Neue"'].join(','),
  },
});

export default PetClinicTheme;
