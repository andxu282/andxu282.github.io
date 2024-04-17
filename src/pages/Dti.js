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

function Dti() {
  return (
    <main style={mainStyle}>
      <AppBar />
      <Profile />
      <Paper style={aboutMeStyle} elevation={3}>
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">dti</Box>
        <Box>
        At Cornell, I'm involved with a student project team called DTI (Design Tech Initiative). We build web Dtis that benefit the
        Cornell and greater Ithaca communities. The Dti that I worked on is called courseplan (courseplan.io), which helps students
        plan out their courses while they're at Cornell. I worked as a developer for 3 semesters before becoming TPM (technical product
        manager) in my last semester and helped onboard new developers on the team and assigning tasks.
        </Box>
      </Paper>
    </main>
  );
}

export default Dti;