import { Box, TextField } from '@mui/material'
import React from 'react'

const TextBar = () => {
  return (
    <>
        <Box sx={{ p: 2, borderRadius: '2px', backgroundColor:'whitesmoke', marginTop: '60px' }} >
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={8}
          defaultValue="Default Value"
          variant="standard"
        />

      
      </Box>
    </>
  )
}

export default TextBar

