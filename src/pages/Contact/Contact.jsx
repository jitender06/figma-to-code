import { Box, Container, Grid, Paper } from '@mui/material'
import React from 'react'
import Call from './assets/call.png'
import Email from './assets/email.png'
import './style.css'
export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{padding:"40px 0px"}}>
        <Grid container spacing={3} pb={4}>
            <Grid item xs={12} md={6} alignContent={"center"}>
                <p className='main-heading'>Lorem Ipsum Dolor <span className='primary-color'>Sit Amet</span></p>
                <span className='description'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor </span>
                <Box marginTop={"10px"}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <img src={Email} alt="email" />
                        <p>info@companyname.com</p>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <img src={Call} alt="call" />
                        <p>+ 91 1234567891</p> 
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{padding:"20px"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='First Name'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Last Name'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Email'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Phone Number'/>
                        </Grid>
                        <Grid item xs={12}>
                            <textarea className='contact-input' rows="4" cols="50" placeholder='Message'/>
                        </Grid>
                        <Grid item xs={12}>
                            <button className='primary-button'>Submit</button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}
