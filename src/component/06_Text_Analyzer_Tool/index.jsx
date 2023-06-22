import React from 'react';
import { AppBar, Box, Toolbar, Typography,} from '@mui/material';
import  ResultBar  from "./Components/ResultBar";

function TextAnalyzer() {


  return (
    <>
    <Box sx={{backgroundColor:"grey", width:'100vw', height:'100vh'}}>

      <AppBar position="static" sx={{marginTop:'3px',}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center'  }}>
            Text Analyzer
          </Typography>
        </Toolbar>
      </AppBar>

      <ResultBar/>
    </Box>

    </>
  );
}

export default TextAnalyzer;
