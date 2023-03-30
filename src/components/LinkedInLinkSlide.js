import { Button, Typography, Grid, FormControl, InputLabel, Input, FormHelperText, Link, InputAdornment } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useState } from 'react'

export default function LinkedInLinkSlide({handleNext, handleBack}) {

    const [error, setError] = useState(true)
    const [url, setUrl] = useState('')

    const validateUrl = (url) => {
        const errorStatus = !url.startsWith("www.linkedin.com/in/")
        if(!errorStatus){
            setUrl(url)
            localStorage.setItem("profile_url", url)
        }
        setError(errorStatus)
    }
    
    const handleSubmit = () => {
        console.log(url)
        handleNext()
    }

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Grid container alignItems="center" direction="column" spacing={3}>
                    <Grid item>
                        <Typography variant="h4">Connect Your LinkedIn Profile</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="linkedin-profile-url">{error ? "Please Enter a Valid URL" : "LinkedIn Profile URL"}</InputLabel>
                            <Input
                            error={error}
                            onChange={(e) => validateUrl(e.target.value)}
                            fullWidth sx={{width: "350px"}}
                            placeholder="www.linkedin.com/in/..."
                            id="linkedin-profile-url"
                            aria-describedby="linkedin-profile-url-helper-text"
                            startAdornment={
                            <InputAdornment position="start">
                                <LinkedInIcon sx={{marginRight: 1}}/>
                            </InputAdornment>}
                            />
                            <FormHelperText id="linkedin-profile-url-helper-text">
                                <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/help/linkedin/answer/a522735/find-your-linkedin-public-profile-url?lang=en">
                                    Need Help?
                                    <OpenInNewIcon sx={{marginLeft: 0.25}}fontSize={"10px"}/>
                                </Link>
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container sx={{paddingY: 3, paddingX: 5}}>
                    <Grid item sx={{flexGrow: 1}}>
                        <Button onClick={handleBack} variant="outlined">Back</Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={error} onClick={handleSubmit} variant="contained">Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
