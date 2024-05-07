import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import './style.css'
import Doctor from './assets/doctors.png'
import engineers from './assets/engineers.png'
import labours from './assets/labours.png'
import lawyers from './assets/lawyers.png'  
import gox from './assets/gox.png'
import teachers from './assets/teachers.png'

export default function Career() {
    const career = [
        {
            name: "Doctors",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: Doctor
        },
        {
            name: "Lawyers",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: labours
        },
        {
            name: "Engineers",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: engineers
        },
        {
            name: "Govt. Officials",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: gox
        },

        {
            name: "Engineers",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: engineers
        },
        {
            name: "Teachers",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: teachers
        },
        {
            name: "Doctors",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: Doctor
        },
        {
            name: "Doctors",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: Doctor
        },

        {
            name: "labours",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: labours
        },
        {
            name: "Doctors",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: Doctor
        },
        {
            name: "Lawyers",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: lawyers
        },
        {
            name: "Doctors",
            description: "Lorem Ipsum Dolor Sit Amet... ",
            image: Doctor
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
                {
                    career.map((value, index) => {
                        return <Grid item xs={12} md={3}>
                            <Box  sx={{ boxShadow: 1 }} display={"flex"} alignItems={"center"} backgroundColor={"white"} borderRadius={"8px"} padding={"15px 0px 15px 20px"}>
                                <img src={value.image} alt="" />
                                <Box marginLeft={"15px"}>
                                    <p className='career-heading'>{value.name}</p>
                                    <span className='career-description'>{value.description} </span>
                                </Box>
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    </Box>
  )
}