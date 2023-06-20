import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Counter() {
  const initialCount = 0;
  const [ count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  
  };
  const handleReset = () => {
    setCount(initialCount)
      
  };
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)

  
  };
  
  return (
    <>
      <AppBar position="static" sx={{marginTop:'3px',}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center'  }}>
            Counter
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ m: 2, display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'column', }}>
        <Typography variant="h5" sx={{ marginBottom: 2, bgcolor: 'text.primary', padding:'10px', borderRadius:'10px', color:'white' }}>
        {count}
        </Typography>
        <Box sx={{margin:'10px'}}>
        <Button variant="contained" sx={{margin:'10px'}} onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="contained" sx={{margin:'10px'}} onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" sx={{margin:'10px'}} onClick={handleIncrement}>
          Increment
        </Button>
        </Box>

      </Box>
    </>
  );
}

export default Counter;
