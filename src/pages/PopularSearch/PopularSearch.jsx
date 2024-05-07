import React from 'react'
import Popular1 from './assets/popular1.png'
import Popular2 from './assets/popular2.png'
import Popular3 from './assets/popular3.png'
import Popular4 from './assets/popular4.png'
import Popular5 from './assets/popular5.png'
import Popular6 from './assets/popular6.png'
import Popular7 from './assets/popular7.png'
import { Box, Container, Grid } from '@mui/material'
export default function PopularSearch() {
    const popular = [
        {
            image: Popular1,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular2,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular3,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular4,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular5,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular6,
            name:"Best Cardiologist Doctors"
        },
        {
            image: Popular7,
            name:"Best Cardiologist Doctors"
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
                    popular.map((value, index) => {
                        return <Grid item xs={6}md={1.7}>
                            <Box textAlign={"center"}>
                                <img src={value.image} alt="" />
                                <p>{value.name}</p>
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    </Box>
  )
}
