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

export default App;