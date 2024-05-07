import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import './style.css'
import Blog1 from './assets/blog1.png'
import Blog2 from './assets/blog2.png'
import Blog3 from './assets/blog3.png'
export default function Blog() {
    const card = [
        {
            name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus arcu ut nibh porta, ac porta diam vehicula. Quisque dignissim ullamcorper mauris sit amet egestas. Pellentesque sed magna ac nisl dapibus<span",
            image: Blog1
        },
        {
            name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus arcu ut nibh porta, ac porta diam vehicula. Quisque dignissim ullamcorper mauris sit amet egestas. Pellentesque sed magna ac nisl dapibus<span",
            image: Blog2
        },
        {
            name:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus arcu ut nibh porta, ac porta diam vehicula. Quisque dignissim ullamcorper mauris sit amet egestas. Pellentesque sed magna ac nisl dapibus<span",
            image: Blog3
        },
    ]
  return (
    <Box sx={{backgroundColor:"#F6FDF8"}}>
        <Container sx={{padding:"40px 0px", maxWidth:"1200px"}}>
            <Grid container spacing={3} pb={4}>
                <Grid item xs={12} textAlign={"center"}>
                    <p className='main-heading'>Lorem Ipsum Dolor <span className='primary-color'>Sit Amet</span></p>
                    <span className='description'>Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum.... </span>
                </Grid>
                {
                    card.map((value, index) => {
                        return <Grid key={index} item xs={12} md={4}>
                            <img src={Blog1} alt="Blog1" />
                            <Box sx={{paddingRight:"20px", display:"flex", flexDirection:"column", gap:"8px"}}>
                                <p className='blog-title'>{value.name}</p>
                                <p className='blog-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus arcu ut nibh porta, ac porta diam vehicula. Quisque dignissim ullamcorper mauris sit amet egestas. Pellentesque sed magna ac nisl dapibus <span className='primary-color'>Read More...</span></p>
                            </Box>
                        </Grid>

                    })
                }
            </Grid>
        </Container>
    </Box>
  )
}
