import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Header from './Header';
import { Box } from '@mui/system';


export default function SeeAvaliableCandidates({userKey, userProfile, setAllSeekers, allSeekers}) {

    useEffect(()=>{
        console.log(localStorage.getItem("seekers"))
        async function getAllSeekers(){
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Token ${userKey}`);
    
            const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };
            try{
                const response = await fetch("https://arjunsaili.pythonanywhere.com/auth/all-seekers/", requestOptions)
                const resJson = await response.json()
                return resJson
            }
            catch(e){
                console.log(e)
            }
        }
        getAllSeekers().then((seekers)=>{
            setAllSeekers(seekers)
            localStorage.setItem("seekers", seekers)
        })
    }, [])
    return(
        <>
        <Header/>
        <Box sx={{paddingX: 6, paddingY: 4}}>
            <Typography variant="h3">Avaliable to Hire</Typography>
            <Grid
            container
            spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{paddingY: 2}}
            >
            {
                allSeekers.length > 0 ?
                    allSeekers.map(function(seeker, i){
                        return (
                            <Grid key={i} item xs={2} sm={3} md={4} key={i}>
                                <Card raised={true}>
                                    <CardActionArea onClick={()=> window.location.assign(seeker["profile_link"])}>
                                        <CardMedia height="250" component="img" sx={{objectFit: "contain"}} src={"profile_img_link" in seeker ? seeker["profile_img_link"] : null}/>
                                        <CardContent>
                                            <Typography variant="h4">{seeker['first_name'] + " " + seeker['last_name']}</Typography>
                                            <Typography>{seeker["headline"]}</Typography>
                                            <Typography>{seeker["company"]}</Typography>
                                            <Typography>{seeker["city"]}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            )
                    }) :
                    <Grid item>
                        <Card sx={{ maxWidth: 500 }}> 
                            <Typography variant="h5">No Job Seekers Currently</Typography>
                        </Card>
                    </Grid>
            }       
            </Grid>
    </Box>
    </>
    )
            
}
