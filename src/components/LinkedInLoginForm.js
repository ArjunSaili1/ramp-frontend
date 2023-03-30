import React, {useState} from 'react'
import { Button, Typography, Grid, CircularProgress } from '@mui/material'
import linkedin from '../assets/linkedin.png'


export default function LinkedInLoginForm({handleBack}) {

    const [loading, setLoading] = useState(false)

    async function handleLinkedInLogin(){
        setLoading(true)
        try{
            const response = await fetch("https://arjunsaili.pythonanywhere.com/auth/handle-linkedin-login/")
            const url = await response.text()
            window.location.assign(url.substring(2, url.length - 2));
        }catch(error){
            console.log(error)
        }
    }

    return (
        <Grid container direction="column" width="100%">
            <Grid item>
                <Grid container direction="column" alignItems="center" rowSpacing={2}>
                    <Grid item>
                        <Typography variant="h4">Login With LinkedIn</Typography>
                    </Grid>
                    <Grid item sx={{width: "250px"}}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                {loading ? 
                                    <CircularProgress/>
                                :

                                <Button>
                                    <img onClick={handleLinkedInLogin} src={linkedin} style={{width: "100%"}}/>
                                </Button>
                                }
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container sx={{paddingY: 3, paddingX: 5}}>
                    <Grid item sx={{flexGrow: 1}}>
                        <Button disabled={loading} onClick={handleBack} variant="outlined">Back</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
