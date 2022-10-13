import React from 'react';
import { Box, Grid, Container, styled, Typography } from '@mui/material';
import { ActionsBtns } from '../Buttons/Buttons';

const Header = styled((props) => <Typography {...props}></Typography>)(
  ({ theme }) => ({
    color: 'white',
    fontFamily: 'cursive',
    marginBottom: '40px',
  })
);

const Description = styled((props) => <Typography {...props}></Typography>)(
  ({ theme }) => ({
    color: 'white',
    marginBottom: '40px',
  })
);

export default function RenderSection({
  sectionId,
  title,
  description,
  buttons,
  bgImageUrl,
  orientation,
}) {
  return (
    <Box
      id={sectionId}
      sx={{
        boxSizing: 'border-box',
        backgroundImage: `url(${bgImageUrl})`,
        width: '100%',
        minHeight: '600px',
        height: 'auto',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Grid container>
          {orientation && <Grid item xs={12} sm={6}></Grid>}

          <Grid item xs={12} sm={6}>
            <Box pt={20}>
              {/* //heading */}
              <Header variant="h2"> {title} </Header>

              {/* description  */}
              <Description variant="h5" sx={{ marginBottom: '30px' }}>
                {description}
              </Description>

              <Typography variant="h5">
                {buttons.length &&
                  buttons.map((item) => (
                    <ActionsBtns
                      label={item.label}
                      link={item.link}
                      handleOnClick={item.handleOnClick}
                    />
                  ))}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
