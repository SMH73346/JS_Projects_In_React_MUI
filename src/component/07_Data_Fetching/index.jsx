import React from 'react';
import { AppBar, Toolbar, Typography,} from '@mui/material';
import Table from "./components/Table";

function DataFetching() {

  return (
    <>
      <AppBar position="static" sx={{marginTop:'3px',}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center'  }}>
            API Data Fetching
          </Typography>
        </Toolbar>
      </AppBar>

      <Table/>

    </>
  );
}

export default DataFetching;
