import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Media from './assets/Media.png'
import Media1 from './assets/Media1.png'
import Media2 from './assets/Media2.png'
import Media3 from './assets/Media3.png'
import Media4 from './assets/Media4.png'
import Media5 from './assets/Media5.png'
import Rating from './assets/Rating.png'
import './style.css'

export default function Category() {
    const Category = [
        {
            name:"Rohan",
            location:"Top Pediatrician in New Delhi",
            image: Media
        },
        {
            name:"Nandani Kumari",
            location:"Need Pediatrician in Banglore",
            image: Media1
        },
        {
            name:"Deepika Verma",
            location:"Top 10 Pediatrician",
            image: Media2
        },
        {
            name:"Aisha Shah",
            location:"Top Pediatrician in New Delhi",
            image: Media3
        },
        {
            name:"Priyanka Garg",
            location:"Pediatrician in MumbaiDelhi",
            image: Media4
        },
        {
            name:"Shubham Dhangar",
            location:"Need Pediatrician in Pune",
            image: Media5
        },
    ]
  return (
    <Box sx={{background:"#F6FDF8"}}>     
        <Container sx={{padding:"40px 0px", maxWidth:"1200px"}}>
            <Grid container spacing={3} pb={4}>
                <Grid item xs={12} textAlign={"center"}>
                    <p className='main-heading'>Lorem Ipsum Dolor <span className='primary-color'>Sit Amet</span></p>
                    <span className='description'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor </span>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {
                            Category.map((value, index) => {
                                return <Grid key={index} item xs={12} md={4}>
                                    <Box display={"flex"} alignItems={"center"} gap={"10px"} sx={{ boxShadow: 2, borderRadius:"12px", overflow:"hidden" }}> 
                                        <img src={value.image} alt="Media" />
                                        <Box>
                                            <p className='rating-name'>{value.name}</p>
                                            <p className='rating-loc'>{value.location}</p>
                                            <img src={Rating} alt="Rating" />
                                        </Box>
                                    </Box>
                                </Grid>

                            })
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <button className='primary-button'>View More</button>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
