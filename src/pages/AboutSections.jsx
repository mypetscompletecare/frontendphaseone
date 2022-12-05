import React from 'react';
import {
  Grid,
  Container,
  styled,
  Typography,
  Box,
  Button,
} from '@mui/material';

// Imported inage
import aboutUs from '../assets/images/aboutUs.webp';

const Section = styled((props) => <section {...props} />)(({ theme }) => ({
  backgroundImage: `url(${aboutUs})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'contained',
  width: '100%',
  minHeight: '500px',
  height: 'auto',
  overflow: 'hidden',
  margin: '50px 0px 30px 0px',
  [theme.breakpoints.down('md')]: {
    backgroundPosition: 'center center',
    minHeight: '450px',
  },
  [theme.breakpoints.down('xs')]: {
    backgroundPosition: 'top center',
    minHeight: '350px',
  },
}));

const SectionTitle = styled((props) => <Typography {...props}></Typography>)(
  ({ theme }) => ({
    width: '100%',
    color: '#FFFFFF',
    fontFamily: '"Bangers", Sans-serif',
    fontSize: '80px',
    lineHeight: '80px',
    textAlign: 'center',
    margin: '24px 0px 16px 0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '60px',
      lineHeight: '60px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '45px',
      lineHeight: '45px',
      textAlign: 'left',
    },
  })
);

const SectionDescription = styled((props) => <Typography {...props} />)(
  ({ theme }) => ({
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '30px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '20px',
      fontWeight: '500',
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '18px',
      fontWeight: '600',
      textAlign: 'left',
    },
  })
);

const CustomButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  fill: '#FFFFFF',
  color: '#FFFFFF',
  backgroundColor: '#000000',
  borderRadius: '30px 30px 30px 30px',
  margin: '16px 8px 16px 0px',
  padding: '13px 25px 13px 25px',
  textTransform: 'capitalize',
  ':hover': {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    padding: '8px 16px 8px 16px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '8px 16px 8px 16px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '600',
  },
}));

const CustomBtnWrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  textAlign: 'center',
  margin: ' 32px 0px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    margin: ' 24px 0px',
  },
  [theme.breakpoints.down('xs')]: {
    textAlign: 'left',
    margin: ' 16px 0px',
  },
}));

export default function AboutSections() {
  return (
    <Section id="AboutSections">
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={4} md={4} />
          <Grid item xs={12} sm={8} md={8}>
            <Box sx={{ padding: '60px 0px 30px 0px' }}>
              <SectionTitle> About Petio </SectionTitle>
              <SectionDescription>
                'Petio is a category-defining health and wellness company
                focused on improving the lives of pets, pet parents and our own
                Petco partners';
              </SectionDescription>
              <CustomBtnWrapper>
                <CustomButton>About Us</CustomButton>
              </CustomBtnWrapper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
