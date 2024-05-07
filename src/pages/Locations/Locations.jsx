import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Map from './assets/map.png'
import Pin from './assets/Pin.png'
import './style.css'
export default function Locations() {
    const state = ["Jammu & Kashmir", "Delhi", "Punjab", "Haryana", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra", "Gujrat", "Rajasthan", "Chhattisgarh", "Bihar", "Kerela", "Arunachal Pradesh", "Assam", "Andhra Pradesh"]
  return (
    <Container maxWidth="xl" sx={{padding:"40px 0px"}}>
        <Grid container spacing={3} pb={4}>
            <Grid item xs={12} md={6}>
                <img src={Map} alt="Map" />
            </Grid>
            <Grid item xs={12} md={6}>
                <p className='location-heaading'>Lorem Ipsum <span className='primary-color'>Featured Locations</span></p>
                <p className='location-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere condimentum lectus. Etiam dignissim nisl sem, eu laoreet ex vestibulum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere condimentum lectus.</p>
                <Grid container spacing={2}>
                    {
                        state.map((value) => {
                            return  <Grid item xs={4} mt={3} display={"flex"} alignItems={"center"} gap={"10px"}>
                                <img src={Pin} alt="Pin" />
                                <p className='city'>{value}</p>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
}
