import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import google from './assets/google.png'
import appStore from './assets/appStore.png'
import app from './assets/app.png'
import './style.css'
export default function DownloadApp() {
  return (
    <Container sx={{padding:"40px 0px", maxWidth:"1200px"}}>
        <Grid container spacing={3} pb={4}>
            <Grid item xs={12} md={6} margin={"auto 0px"} display={"flex"} alignItems={"flex-start"} gap={2} flexDirection={"column"}>
                <p className='download-action'>Lorem Ipsum Dolor Sit Amet <br /> <span className='primary-color'>Download App</span></p>
                <p className='download-description'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit <br /> Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum</p>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                    <img src={google} alt="google" />
                    <img src={appStore} alt="app store" />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={app} alt="app" />
            </Grid>
        </Grid>
    </Container>
  )
}
