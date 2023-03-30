import React from 'react'
import Grid from '@mui/material/Grid';
import {Typography, Button } from '@mui/material';


export default function SelectAccountTypeSlide({handleNext}) {

    const setRecruiter = () => {
        localStorage.setItem("user_type", "recruiter")
        handleNext()
    }

    const setSeeker = () => {
        localStorage.setItem("user_type", "seeker")
        handleNext()
    }

    return (
        <Grid container direction="column" rowSpacing={"20px"} alignItems="center" sx={{marginBottom: 3}}>
            <Grid container direction="column">
                <Grid item>
                    <Typography align="center" variant="h3">Join Ramp</Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="subtitle1">We're glad you're here</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h5" align="center">Select your account type:</Typography>
            </Grid>
            <Grid item>
                <Grid 
                container
                justifyContent="center"
                columnSpacing={2}>
                    <Grid item>
                        <Button onClick={setRecruiter} variant="contained">Recruiter</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={setSeeker} variant="contained">Job Seeker</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
