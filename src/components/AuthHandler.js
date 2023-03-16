import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export default function AuthHandler({token, setToken, userType, userProfile, setUserProfile, setUserKey }) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)


    async function updateProfileData(accessToken){
        const formdata = new FormData();
        formdata.append("access_token", accessToken);
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        try{
            let userType = localStorage.getItem("user_type")
            const response = await fetch(`https://arjunsaili.pythonanywhere.com/auth/${userType}/`, requestOptions)
            const resJson = await response.json()
            return resJson['key']
        }
        catch(error){
            console.log(error)
        }
    }

    async function retrieveProfile(key){
        setUserKey(key)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${key}`);

        const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const response = await fetch("https://arjunsaili.pythonanywhere.com/auth/dj-rest-auth/user/", requestOptions)
        const responseJson = await response.json()
        return responseJson
    }

    async function convertCodeToToken(code){
        if (token == null){
            const formdata = new FormData();
            formdata.append("code", code)
            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            try{
                const response = await fetch("https://arjunsaili.pythonanywhere.com/auth/access-token/", requestOptions)
                const resJson = await response.json()
                if (response.status == 200){
                    if(token == null){
                        setToken(resJson['access_token'])
                        return resJson['access_token']
                    }
                }
            }catch(error){
                console.log(error)
            }
            return 'ERROR' 
        }
    
    }

    useEffect(() => {
        setLoading(true)
        const code = (window.location.search.match(/code=([^&]+)/) || [])[1];
        localStorage.setItem("code", code)
        convertCodeToToken(code).then((resToken)=>{
            updateProfileData(resToken).then((key)=>{
                retrieveProfile(key).then((profile)=>{
                    setUserProfile(profile)
                    setLoading(false)
                    if(profile["user_type"]=="seeker"){
                        navigate("/user-profile")
                    }
                    else{
                        navigate("/all-seekers")
                    }
                })
            })
        })
    }, []);

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap="30px"
        style={{ minHeight: '100vh' }}
        >
            {loading ?
            <>
                <Grid item>
                    <Typography>Retrieving Your Profile</Typography>
                </Grid>
                <Grid>
                    <CircularProgress/>
                </Grid>
            </>: ''}
        </Grid>
    )
}
