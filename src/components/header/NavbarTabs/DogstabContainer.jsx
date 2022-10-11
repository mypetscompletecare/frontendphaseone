import React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { useTheme, styled } from '@mui/material/styles';

const ListHeader = styled((props) => <ListItem {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  textTransform: 'capitalize',
  color: theme.palette.grey[900],
  cursor: 'pointer',
}));

const Listitem = styled((props) => <ListItem {...props} />)(({ theme }) => ({
  ...theme.typography.body1,
  textTransform: 'capitalize',
  color: theme.palette.grey[500],
  padding: '0px 16px',
  ':hover': {
    color: '#E65100',
    cursor: 'pointer',
    background: theme.palette.grey[50],
  },
}));

export default function DogstabContainer() {
  const TabRowData = [
    {
      icon: <PetsIcon />,
      title: 'Food',
      tabLinks: [
        { label: 'Puppy Corner' },
        { label: 'Dry Food' },
        { label: 'Wet Food' },
        { label: 'Food Supplements' },
      ],
    },
    {
      icon: <BakeryDiningIcon />,
      title: 'Treet & Chews',
      tabLinks: [
        { label: 'Biscuit & Cookies' },
        { label: 'Bones & Chews' },
        { label: 'Dental Treats' },
        { label: 'Jerky Treats' },
      ],
    },
    {
      icon: <HealthAndSafetyIcon />,
      title: 'Health & Wellness',
      tabLinks: [
        { label: 'Flease & Ticks' },
        { label: 'Grooming Supplies' },
        { label: 'Waste Disposal' },
        { label: 'Other Health Care Aids' },
      ],
    },
    {
      icon: <WebStoriesIcon />,
      title: 'Accessories',
      tabLinks: [
        { label: 'Collars, Leashes & Harness' },
        { label: 'Bowls & Feeders' },
        { label: 'Toys' },
        { label: 'Clothes & Accessories' },
      ],
    },
  ];

  return (
    <Box component={Paper} sx={{ width: '100%', padding: '20px 10px' }}>
      <Grid container>
        {TabRowData.map((item, i) => (
          <Grid key={i} item xs={12} sm={3}>
            <List disablePadding={true}>
              <ListHeader>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListHeader>
              {item.tabLinks.map((tabLinkItem, i) => (
                <Listitem key={i}>
                  <ListItemText>{tabLinkItem.label}</ListItemText>
                </Listitem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
