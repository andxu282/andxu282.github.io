import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '../AppBar';
import * as React from 'react';
import ProfilePic from '@/assets/pfp.jpeg';

const profilePicStyle = {
  display: 'block',
  borderRadius: "20%",
};


const mainStyle = {
  display: 'grid',
  backgroundColor: '#080421',
  height: '100%',
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

function App() {
  return (
    <main style={mainStyle}>
      <AppBar />
      <Box display="flex" flexDirection="row" justifySelf="center" alignItems="center">
        <img src={ProfilePic.src} style={profilePicStyle}/>
        <Box marginLeft="30px">
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">andrew xu</Box>
        <Box fontWeight={400} fontSize="24px">cs @ cornell</Box>
        <Box fontWeight={400} fontSize="24px">software development, linguistics</Box>
        </Box>
      </Box>
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

export default App;