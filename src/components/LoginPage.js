import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

export default function LoginPage({userType, setToken, token}) {
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

    useEffect(()=>{
        console.log(userType)
    }, [])

    return (
    <Grid
    container
    spacing={0}
    direction="column"
    justifyContent="center"
    alignItems="center"
    rowGap="30px"
    style={{ minHeight: '100vh' }}>
        <Card variant="outlined">
            <CardContent>
                {loading ? 
                    <CircularProgress/>
                :
                <>  <h2>{userType}</h2>
                    <Typography variant="h5">Welcome to Ramp</Typography>
                    <img
                    src={linkedin}
                    onClick={handleLinkedInLogin}
                    alt="Sign in with Linked In"
                    style={{ maxWidth: '250px', cursor: 'pointer' }}/>
                </>
                }
            </CardContent>
        </Card>
    </Grid>
    )
}
