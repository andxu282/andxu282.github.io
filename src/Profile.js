'use client'

import Box from '@mui/material/Box';
import ProfilePic from './assets/pfp.jpeg';
import * as React from 'react';

const profilePicStyle = {
  display: 'block',
  borderRadius: "20%",
  height: '300px',
  width: '300px',
};

function Profile() {
  return (
    <Box display="flex" flexDirection="row" justifySelf="center" alignItems="center">
      <img src={ProfilePic} style={profilePicStyle} alt="profilePic"/>
      <Box marginLeft="30px">
      <Box fontWeight={700} fontSize="72px" lineHeight="72px" color="white">andrew xu</Box>
      <Box fontWeight={400} fontSize="24px" color="white">cs @ cornell</Box>
      <Box fontWeight={400} fontSize="24px" color="white">software development, linguistics</Box>
      </Box>
    </Box>
  );
}

export default Profile;