import { Grid } from '@mui/material'
import React from 'react'
import RightBanner from './assets/banner.jpg'
import Doctor from './assets/doctor.png'
import Enginners from './assets/engineers.png'
import Ca from './assets/ca.png'

import Advocate from './assets/advocate.png'
import Teacher from './assets/teacher.png'
import Labor from './assets/labor.png'
import Office from './assets/office.png'
import Gov from './assets/gov.png'

import Donate from './assets/donate.png'
import Funding from './assets/funding.png'
export default function Info() {
  return (
    <Grid container spacing={2} py={4}>
        <Grid item xs={12} md={6}>
            <img src={RightBanner} alt="banner" />
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid container spacing={2} textAlign={"right"}>
                <Grid item xs={6} md={3}>
                    <img src={Doctor} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Enginners} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Ca} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Advocate} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Teacher} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Labor} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Office} alt="Doctor" />
                </Grid>

                <Grid item xs={6} md={3}>
                    <img src={Gov} alt="Doctor" />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
            <img src={Donate} alt="banner" style={{paddingTop:"20px"}} />
        </Grid>
        <Grid item xs={12} md={6} textAlign={"right"}>
            <img src={Funding} alt="banner" style={{paddingTop:"20px"}}/>
        </Grid>
    </Grid>
  )
}
