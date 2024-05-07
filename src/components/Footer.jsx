import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoFooter from '../assets/logo.png'
import './style.css'
export default function Footer() {
  const links = [
    {
      name:"About us",
      link:"#"
    },
    {
      name:"Investor Relations",
      link:"#"
    },
    {
      name:"We're hiring",
      link:"#"
    },
    {
      name:"Customer Care",
      link:"#"
    },
    {
      name:"Free Listing",
      link:"#"
    },
    {
      name:"Report a Bug",
      link:"#"
    },
    {
      name:"What's New",
      link:"#"
    },
    {
      name:"B2B Sitemap",
      link:"#"
    }  
  ]

  const Categories = [
    {
      name:"Doctors",
      link:"#"
    },
    {
      name:"Engineers",
      link:"#"
    },
    {
      name:"CA’s",
      link:"#"
    },
    {
      name:"Advocates",
      link:"#"
    },
    {
      name:"Teachers",
      link:"#"
    },
    {
      name:"Labours",
      link:"#"
    },
    {
      name:"Officers",
      link:"#"
    },
    {
      name:"Govt. Officials",
      link:"#"
    }   
  ]

  const Cities = [
    {
      name:"New Delhi",
      link:"#"
    },
    {
      name:"Pune",
      link:"#"
    },
    {
      name:"Surat",
      link:"#"
    },
    {
      name:"Mumbai",
      link:"#"
    },
    {
      name:"Panaji",
      link:"#"
    },
    {
      name:"Bangalore",
      link:"#"
    },
    {
      name:"Chandigarh",
      link:"#"
    },
    {
      name:"Srinagar",
      link:"#"
    }   
  ]

  return (
    <>
      <Container maxWidth="xl" sx={{padding:"40px 0px"}}>
          <Grid container spacing={3} pb={4}>
            <Grid item xs={6} md={4.5} display={"grid"} gap={"20px"}>
              <img src={LogoFooter} alt="LogoFooter" />
              <p className='footer-links'><span className='bold'>Headquarters</span>: 70 Washington Square South, <br /> New York, NY 10012, United States</p>
              <a className='primary-color' href="#">Show on Map</a>
              <Box sx={{display:"flex", alignItems:"center", gap:'10px'}}>
                <DraftsOutlinedIcon className='primary-color'/>
                <p className='footer-links'>info@companyname.com</p>
              </Box>

              <Box sx={{display:"flex", alignItems:"center", gap:'10px'}}>
                <PhoneInTalkOutlinedIcon className='primary-color'/>
                <p className='footer-links'>+91 1234567891</p>
              </Box>

              <Box sx={{display:"flex", alignItems:"center", gap:'10px'}}>
                <FacebookIcon className='primary-color'/>
                <InstagramIcon className='primary-color'/>
                <TwitterIcon className='primary-color'/>
                <YouTubeIcon className='primary-color'  />
              </Box>        
            </Grid>
            <Grid item xs={6} md={2.5}>
              <p className='footer-heading'>Quick Links</p>
              <ul className='link-container'>
                {
                  links.map((value, index) => {
                    return <li className='footer-links' key={value}>{value.name}</li>
                  })
                }
              </ul>
            </Grid>

            <Grid item xs={6} md={2.5}>
              <p className='footer-heading'>Popular Categories</p>
              <ul className='link-container'>
                {
                  Categories.map((value, index) => {
                    return <li className='footer-links' key={value}>{value.name}</li>
                  })
                }
              </ul>
            </Grid>

            <Grid item xs={6} md={2.5}>
              <p className='footer-heading'>Popular Cities</p>
              <ul className='link-container'>
                {
                  Cities.map((value, index) => {
                    return <li className='footer-links' key={value}>{value.name}</li>
                  })
                }
              </ul>
            </Grid>
          </Grid>
      </Container>
      <Box sx={{backgroundColor:"#0BDBB6", padding:"20px 0px", textAlign:"center"}}>
        <p className='copyright'>Copyrights 2008-24.  All Rights Reserved.</p>
      </Box>
    </>
  )
}
