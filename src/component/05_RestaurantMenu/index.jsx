import React from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Grid, Toolbar, Typography, } from '@mui/material';
import Recipe from "./images/item-1.jpeg"
function ResturantMenu() {
  const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const padding = {
    padding: '5px',
  }
  const margin = {
    margin: '15px',
  }



  return (
    <>
      <AppBar position="static" sx={{ padding, flex }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={flex}>
            Resturant Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Typography variant="h2" component="div" sx={{ margin: '10px', flex }}>
          Our Menu
        </Typography>
        <Box sx={flex}>
          <Button variant="outlined" aria-label="outlined primary button" sx={margin} >All</Button>
          <Button variant="outlined" aria-label="outlined primary button" sx={margin} >Breakfast</Button>
          <Button variant="outlined" aria-label="outlined primary button" sx={margin} >Lunch</Button>
          <Button variant="outlined" aria-label="outlined primary button" sx={margin} >Shakes</Button>
          <Button variant="outlined" aria-label="outlined primary button" sx={margin} >Dinner</Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={6}>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: '151' }}
              image={Recipe}
              alt="space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mac Miller
                </Typography>
              </CardContent>
            </Box>

          </Card>
        </Grid>
        <Grid xs={6}>
          Grid 2
        </Grid>
      </Grid>
    </>
  );
}

export default ResturantMenu;
