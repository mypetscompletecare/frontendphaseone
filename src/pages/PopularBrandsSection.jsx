import React from 'react';
import { Grid, Container, styled, Typography, Box } from '@mui/material';

const Section = styled((props) => <section {...props} />)(({ theme }) => ({
  margin: '50px 0px 30px 0px',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('md')]: {},
}));

const SectionTitle = styled((props) => <Typography {...props}></Typography>)(
  ({ theme }) => ({
    width: '100%',
    color: '#000',
    fontFamily: '"Bangers", Sans-serif',
    fontSize: '60px',
    lineHeight: '60px',
    textAlign: 'center',
    margin: '24px 0px 16px 0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '60px',
      lineHeight: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '45px',
      lineHeight: '45px',
    },
  })
);

const ImageBoxItem = styled((props) => <Box {...props} />)(({ theme }) => ({
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid #dedede',
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    margin: ' 24px 0px',
  },
  [theme.breakpoints.down('xs')]: {
    textAlign: 'left',
    margin: ' 16px 0px',
  },
}));

export default function PopularBrandsSection() {
  const brandContainerData = [
    { url: 'https://via.placeholder.com/150.png', title: 'Brand 1' },
    { url: 'https://via.placeholder.com/150.png', title: 'Brand 2' },
    { url: 'https://via.placeholder.com/150.png', title: 'Brand 3' },
    { url: 'https://via.placeholder.com/150.png', title: 'Brand 4' },
  ];
  return (
    <Section id="PopularBrandsSection">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Box sx={{ padding: '60px 0px 30px 0px' }}>
              <SectionTitle> Popular Brands </SectionTitle>
            </Box>
            {/* wrapper container  */}
            <Box
              sx={{
                margin: '20px 0px',
                display: 'flex',
                flexFlow: ' row wrap',
                justifyContent: 'center',
              }}
            >
              {/* image container  */}
              {brandContainerData.map((item, i) => (
                <Box sx={{ width: '250px' }} key={i}>
                  <ImageBoxItem>
                    <img
                      src={item.url}
                      alt={item.title}
                      sx={{
                        transition: 'all .5s ease',
                        maxHeight: '155px',
                        marginBottom: '16pc',
                      }}
                    />
                  </ImageBoxItem>
                  <Typography align="center" color="primary">
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
