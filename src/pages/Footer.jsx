import React from 'react';
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Container } from '@mui/system';
import brandLogo from '../assets/images/logo.png.webp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import visa from '../assets/images/payments/visa-48.png';
import paytm from '../assets/images/payments/paytm-48.png';
import upi from '../assets/images/payments/bhim-48.png';
import phonepe from '../assets/images/payments/phone-pe-48.png';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

import { grey } from '@mui/material/colors';
import {  styled } from '@mui/material/styles';
export default function Footer() {
  // getting data
  const date = new Date();
  let year = date.getFullYear();

  const shortLinksUrl = [
    {
      title: 'Important Links',
      links: [
        { label: 'About Us', linkedUrl: '#' },
        { label: 'Veterinary Services', linkedUrl: '#' },
        { label: 'Vendors', linkedUrl: '#' },
        { label: 'Pet Adoption', linkedUrl: '#' },
        { label: 'Resource Center', linkedUrl: '#' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { label: 'Track Order', linkedUrl: '#' },
        { label: 'Returns', linkedUrl: '#' },
        { label: 'Shipping Info', linkedUrl: '#' },
        { label: 'Recalls & Advisories', linkedUrl: '#' },
        { label: 'Pet Store Locator', linkedUrl: '#' },
      ],
    },
  ];

  const socialsIcons = [
    { iconLable: <FacebookOutlinedIcon />, iconUrl: '#' },
    { iconLable: <InstagramIcon />, iconUrl: '#' },
    { iconLable: <YouTubeIcon />, iconUrl: '#' },
    { iconLable: <WhatsAppIcon />, iconUrl: '#' },
    { iconLable: <TwitterIcon />, iconUrl: '#' },
  ];

  const paymentLogo = [
    { logoUrl: visa, logoRedirect: '#' },
    { logoUrl: paytm, logoRedirect: '#' },
    { logoUrl: upi, logoRedirect: '#' },
    { logoUrl: phonepe, logoRedirect: '#' },
  ];

  const ListItemTexts = styled((props) => <ListItemText {...props} />)(
    ({ theme }) => ({
      ...theme.typography.body1,
      textTransform: 'capitalize',
      color: theme.palette.text.secondary,
      ':hover > p': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    })
  );

  const AvatarWithIcon = styled((props) => <Avatar {...props} />)(
    ({ theme }) => ({
      ...theme.typography.body1,
      textTransform: 'capitalize',
      color: 'inherit',
      bgcolor: grey[900],
      marginLeft: '8px',
      ':hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    })
  );

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#efefee', padding: '24px 0px' }}>
      <Grid container sx={{ margin: '50px 0px 0px 0px' }}>
        {/* //first section  */}
        <Grid item xs={12} sm={12}>
          <Grid container sx={{ marginBottom: '24px' }}>
            <Grid item xs={12} sm={6}>
              <Box display={'flex'}>
                <Avatar sx={{ backgroundColor: '#efefef', padding: '10px' }}>
                  <MailOutlinedIcon
                    color="primary"
                    sx={{ height: '36px', width: '36px' }}
                  />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{ lineHeight: '60px', marginLeft: '20px' }}
                >
                  Join now and get 10% off your next purchase!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* main footer  */}
        <Grid item xs={12} sm={12}>
          <Grid container sx={{ margin: '16px 0px' }}>
            {/* address / logo /brand  */}
            <Grid item xs={12} sm={5}>
              <Box>
                <img
                  alt="Brand logo"
                  src={brandLogo}
                  style={{ width: '150px', height: 'auto' }}
                />
                <Typography variant="body2" color="GrayText">
                  If you have any question, please contact us at{' '}
                  <span color="primary">support@example</span>.
                </Typography>
              </Box>
              <Box>
                <List dense={false}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: grey[50] }}>
                        <LocationOnIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      30 Buttonwood St.Pataskala OH 43062
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: grey[50] }}>
                        <PhoneAndroidIcon color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>(+1)-613-333-0101</ListItemText>
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ display: 'flex' }} mt={2}>
                {socialsIcons.map((item, i) => (
                  <AvatarWithIcon key={i}>{item.iconLable}</AvatarWithIcon>
                ))}
              </Box>
            </Grid>
            {/* important links  */}
            <Grid item xs={12} sm={7}>
              <Grid container>
                {shortLinksUrl.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <List dense={true} disablePadding={true}>
                      <ListItem>
                        <ListItemTexts>
                          <Typography variant="h6" color={grey[900]}>
                            {item.title}
                          </Typography>
                        </ListItemTexts>
                      </ListItem>
                      {item.links.map((urls, u) => (
                        <ListItem key={u}>
                          <ListItemTexts color="">
                            <Typography variant="body1" color="GrayText">
                              {urls.label}
                            </Typography>
                          </ListItemTexts>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* span footer  */}
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} component={Box} mt={2}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ paddingLeft: '32px' }}>
                © {year} Petio Pets Store
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                {paymentLogo.map((item, i) => (
                  <img
                    key={i}
                    src={item.logoUrl}
                    alt={`logo ${i}`}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      margin: '0px 16px',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
