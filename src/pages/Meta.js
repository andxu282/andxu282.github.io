import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '../AppBar';
import Profile from '../Profile';
import * as React from 'react';

const mainStyle = {
  display: 'grid',
  backgroundColor: '#080421',
  height: '100vh',
};

const aboutMeStyle = {
  width: "800px",
  justifySelf: "center",
  borderColor: "gray", 
  border: "1px solid",
  borderRadius: "16px",
  padding: "16px",
  backgroundColor: '#080421',
  color: 'white',
};

function Meta() {
  return (
    <main style={mainStyle}>
      <AppBar />
      <Profile />
      <Paper style={aboutMeStyle} elevation={3}>
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">meta</Box>
        <Box>
        In summer of 2022, I had the amazing opportunity to intern at Meta in the Boston office.
        I worked on building a terminal app using Rust that allowed our team to start, stop, restart, and test our services.
        I grew a lot technically, but I think more importantly got a better feel for what it was like working in industry.
        </Box>
      </Paper>
    </main>
  );
}

export default Meta;