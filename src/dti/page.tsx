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
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">dti</Box>
        <Box>
        At Cornell, I'm involved with a student project team called DTI (Design Tech Initiative). We build web apps that benefit the
        Cornell and greater Ithaca communities. The app that I worked on is called courseplan (courseplan.io), which helps students
        plan out their courses while they're at Cornell. I worked as a developer for 3 semesters before becoming TPM (technical product
        manager) in my last semester and helped onboard new developers on the team and assigning tasks.
        </Box>
      </Paper>
    </main>
  );
}

export default App;