import { Typography, Grid, Button, Card, SvgIcon, Paper, CardContent, Tabs, Tab, useTheme } from '@mui/material'
import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router';
import { ReactComponent as LockerIcon } from '../assets/locker-dynamic-color.svg';
import { ReactComponent as WalletIcon } from '../assets/wallet-front-color.svg';
import { ReactComponent as TargetIcon } from '../assets/target-front-color.svg'
import { ReactComponent as ClockIcon } from '../assets/explorer-front-color.svg'

export default function LandingPage({}) {
    const navigate = useNavigate()
    const theme = useTheme()

    return (
        <>
            <Header/>
            <Grid container
            direction="column"
            rowSpacing={"40px"}
            marginTop={"40px"}
            marginBottom={"40px"}>
                <Grid item alignSelf="center">
                    <Grid container sx={{marginBottom: 10}}>
                        <Grid item xs={10}>
                            <Grid container direction="column" spacing={3}>
                                <Grid item>
                                    <Typography variant="h3" fontWeight="500">Unlock Your Career Potential</Typography>
                                    <Typography variant="h5">Ramp Connects Top Talent with Dream Opportunities.</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button sx={{ boxShadow: 4 }} size="large" onClick={() => navigate("login")} variant="contained">Join The Network</Button>
                                </Grid>
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <SvgIcon component={LockerIcon} inheritViewBox sx={{fontSize: {lg: 200, md: 160, sm: 140, xs: 100}}}/>
                        </Grid>
                    </Grid>
                    <Grid item sx={{flexGrow: 1}} sx={{marginBottom: 10}}>
                        <Grid container direction="row" rowSpacing={3}>
                            <Grid item xs={12} sx={{flexGrow: 1}}>
                                <Typography align="center" variant="h4" fontWeight="500">Ramp's Benefits</Typography>
                            </Grid>
                            <Grid item sx={{flexGrow: 1}}>
                                <Grid container direction="row" spacing={2} justifyContent="center">
                                    <Grid item xs={4}>
                                        <Card sx={{ borderRadius: "10px" }}>
                                            <CardContent>
                                                <Grid container alignItems="center" direction="column">
                                                    <Grid item>
                                                        <SvgIcon component={ClockIcon} inheritViewBox sx={{fontSize: { xs: 70, sm: 100, md: 120, lg: 150 } }}/>
                                                    </Grid>
                                                    <Grid item>   
                                                        <Typography variant="h6" fontWeight={450} align="center">Speed Up Your Job Search</Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card sx={{ borderRadius: "10px" }}>
                                            <CardContent>
                                                <Grid container alignItems="center" direction="column">
                                                    <Grid item>
                                                        <SvgIcon component={WalletIcon} inheritViewBox sx={{fontSize: { xs: 70, sm: 100, md: 120, lg: 150 } }}/>
                                                    </Grid>
                                                    <Grid item>   
                                                        <Typography variant="h6" fontWeight={450} align="center">Increase Your Salary</Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card sx={{ borderRadius: "10px" }}>
                                        <CardContent>
                                                <Grid container alignItems="center" direction="column">
                                                    <Grid item>
                                                        <SvgIcon component={TargetIcon} inheritViewBox sx={{fontSize: { xs: 70, sm: 100, md: 120, lg: 150 } }}/>
                                                    </Grid>
                                                    <Grid item>   
                                                        <Typography variant="h6" fontWeight={450} align="center">Find Your Perfect Match</Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{flexGrow: 1}}>
                        <Paper sx={{padding: 5}}>
                            <Grid container direction="column" rowGap={3}>
                                <Grid item>
                                    <Typography fontWeight={450} variant="h4">How It Works</Typography>
                                </Grid>
                                <Grid item sx={{flexGrow: 1}}>
                                    <Typography variant="h5">Ramp finds the perfect career match for recruiters and job seekers!</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" fontWeight="bold">For Job Seekers </Typography>
                                    <Typography variant="h6" fontWeight="400">Ramp puts job searching on auto-pilot</Typography>
                                    <Typography variant="h6" fontWeight="400">After registering, your LinkedIn profile is added to our database and visable to all recruiters</Typography>
                                    <Typography variant="h6" fontWeight="400">This way, you can remain employed and let the job offers come to you! </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" fontWeight="bold">For Recruiters</Typography>
                                    <Typography variant="h6" fontWeight="400">Ramp allows you access to currently employed candidates</Typography>
                                    <Typography variant="h6" fontWeight="400">After registering, you gain access to our database of skilled individuals</Typography>
                                    <Typography variant="h6" fontWeight="400">With Ramp, you can increase your candidate pool and find the perfect match!</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    
                </Grid>
                
                
            </Grid>
        </>
    )
}
