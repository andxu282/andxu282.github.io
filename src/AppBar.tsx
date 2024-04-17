import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

const buttonStyle = {
  padding: '8px',
  height: '40px',
  marginLeft: '8px',
  color: 'white',
  borderColor: 'white',
  textTransform: 'lowercase',
};

function AppBar() {
    const pages: { [key: string]: string } = {'about me': '/', 'meta': '/meta', 'enable medicine': '/enable', 'dti': '/dti'}
    return (
      <Box display="flex" flexDirection="row" justifySelf="right" marginTop="16px" marginRight="16px">
        {Object.keys(pages).map((page) => (
          <Button variant="outlined" href={pages[page]}>
            {page}
          </Button>
        ))}
      </Box>
    );
  }

  export default AppBar;