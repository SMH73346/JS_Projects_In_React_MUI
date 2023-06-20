import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function ColorFlipper() {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const [currentColor, setCurrentColor] = useState('#f1f4f5');

  const getRandomColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    return hexColor;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const handleButtonClick = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <>
      <AppBar position="static" sx={{marginTop:'3px',}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center'  }}>
            Color Flipper
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ m: 2, display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'column', }}>
        <Typography variant="h5" sx={{ marginBottom: 2, bgcolor: 'text.primary', padding:'10px', borderRadius:'10px', color:'white' }}>
          Background Color:
          <span style={{ color: currentColor }}>{currentColor}</span>
        </Typography>
        <Button variant="contained" onClick={handleButtonClick}>
          Click Me
        </Button>
      </Box>
    </>
  );
}

export default ColorFlipper;
