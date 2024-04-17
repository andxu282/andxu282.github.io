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

function Enable() {
  return (
    <main style={mainStyle}>
      <AppBar />
      <Profile />
      <Paper style={aboutMeStyle} elevation={3}>
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">enable medicine</Box>
        <Box>
        I had the opportunity to intern at a biotech startup, Enable Medicine, from January until August 2023.
        This was an amazing learning experience as I grew from a computer science student to a full software engineer.
        Due to the small size of the company, I was forced to take on much more responsibility and ownership of features,
        as well as being exposed to a variety of cutting edge technologies.
        </Box>
      </Paper>
    </main>
  );
}

export default Enable;