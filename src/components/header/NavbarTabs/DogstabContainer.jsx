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

export default function DogstabContainer() {
  const TabRowData = [
    {
      icon: 'f',
      title: 'food',
      tabLinks: [
        { label: 'Puppy Corner' },
        { label: 'Dry Food' },
        { label: 'Wet Food' },
        { label: 'Food Supplements' },
      ],
    },
    {
      icon: 'T',
      title: 'Treet & Chews',
      tabLinks: [
        { label: 'Biscuit & Cookies' },
        { label: 'Bones & Chews' },
        { label: 'Dental Treats' },
        { label: 'Jerky Treats' },
      ],
    },
    {
      icon: 'f',
      title: 'Health & Wellness',
      tabLinks: [
        { label: 'Flease & Ticks' },
        { label: 'Grooming Supplies' },
        { label: 'Waste Disposal' },
        { label: 'Other Health Care Aids' },
      ],
    },
    {
      icon: 'A',
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
    <Box component={Paper} sx={{ width: '100%' }}>
      <Grid container>
        {TabRowData.map((item, i) => (
          <Grid key={i} item xs={12} sm={3}>
            <List>
              <ListItem>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
              {item.tabLinks.map((tabLinkItem, i) => (
                <ListItem key={i}>
                  <ListItemText>{tabLinkItem.label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
