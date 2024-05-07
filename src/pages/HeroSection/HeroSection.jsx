import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css'
import Info from './components/Info';
export default function HeroSection() {
  return (
    <Container maxWidth="xl" sx={{padding:"40px 0px"}}>
      <p className='action-text'>Lorem Ipsum Dolor Sit Amet, <span className='primary-color'>Consectetur Adipiscing Elit</span></p>
      <div className='home-action' style={{ position: 'relative' }}>
        <input className='search-location' placeholder='Search Location...' style={{ paddingLeft: '30px' }} />
        <Box sx={{ position: 'absolute', left: '10px', top: '70%', transform: 'translateY(-50%)', color:"gray" }}>
          <LocationOnIcon sx={{fontSize:"18px"}}/>
        </Box>
        <input className='search-doctors' placeholder='Search cardiologist, doctors...'/>
        <button className='action-btn'><SearchIcon/></button>
      </div>
      <Info/>
    </Container>
  )
}

