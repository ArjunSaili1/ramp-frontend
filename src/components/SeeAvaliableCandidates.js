import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';


export default function SeeAvaliableCandidates({userKey, userProfile}) {

    const [allSeekers, setAllSeekers] = useState([])

    useEffect(()=>{
        async function getAllSeekers(){
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Token ${userKey}`);
    
            const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };
            try{
                const response = await fetch("http://arjunsaili.pythonanywhere.com/auth/all-seekers/", requestOptions)
                const resJson = await response.json()
                return resJson
            }
            catch(e){
                console.log(e)
            }
        }
        getAllSeekers().then((seekers)=>{
            setAllSeekers(seekers)
            console.log(seekers)
        })
    }, [])
    return(
    <Grid
    container
    spacing={0}
    direction="column"
    justifyContent="center"
    alignItems="center"
    rowGap="30px"
    style={{ minHeight: '100vh' }}>
    {
        allSeekers.length > 0 ?
            allSeekers.map(function(seeker, i){
                return (
                seeker['company'] !== userProfile['company'] ?
                    <Grid item key={i}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardContent>
                                <Typography variant="h4">{seeker['first_name'] + " " + seeker['last_name']}</Typography>
                                <Typography variant="h5">Current Company: {seeker['company']}</Typography>
                                <Typography variant="h6">Top Skills: {seeker['skills'].map((skill)=>{
                                    return skill['name'] + ", "
                                })}</Typography>
                            </CardContent>
                        </Card>
                    </Grid> : "")
            }) :
            <Grid item>
                <Card sx={{ maxWidth: 500 }}> 
                    <Typography variant="h5">No Job Seekers Currently</Typography>
                </Card>
            </Grid>
    }       
    </Grid>
    )
            
}
