'use client'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '../AppBar';
import * as React from 'react';
import Profile from '../Profile';

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

function Home() {
  return (
    <main style={mainStyle}>
      <AppBar />
      <Profile />
      <Paper style={aboutMeStyle} elevation={3}>
        <Box fontWeight={700} fontSize="72px" lineHeight="72px">about me</Box>
        <Box>
        Hello! I'm a senior at Cornell University, studying Computer Science in the College of Engineering.
        Currently, I am the TPM of CoursePlan, a web app project that is a part of DTI.
        DTI is a project team that designs, creates, and markets products that help the greater Cornell community.
        I interned at Meta in Summer 2022, and from January to August of 2023, I worked as a software engineer intern at Enable Medicine. In my free time, I run, study languages, and meditate.
        </Box>
      </Paper>
    </main>
  );
}

export default Home;