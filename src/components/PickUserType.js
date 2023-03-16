import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';


export default function PickUserType({setUserType, userType, token}) {

    const navigate = useNavigate()

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap="30px"
        style={{ minHeight: '100vh' }}>
            <Grid item>
                <Button onClick={()=>{
                    localStorage.setItem("user_type", "seeker")
                    navigate("/login")
                }}
                >I'm a Job Seeker</Button>
            </Grid>
            <Grid item>
                <Button onClick={()=>{
                    localStorage.setItem("user_type", "recruiter")
                    navigate("/login")
                    }}>I'm a Recruiter</Button>
            </Grid>
        </Grid> 
    )
}
