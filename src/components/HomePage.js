import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'


export default function HomePage({userProfile}) {

    return(<Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap="30px"
        style={{ minHeight: '100vh' }}>
            <Grid item>
                <Typography textAlign="center" variant="h2">Thanks for signing up for Ramp! You can now sit back and relax.</Typography>
                <Typography textAlign="center" variant="h3">Your account has been added to our database</Typography>
                <Typography textAlign="center" variant="h3">Recruiters will be reaching out if your seem like a good fit!</Typography>
                <Typography textAlign="center" variant="h4">Don't worry, your current employer won't be able to see your account</Typography>
            </Grid>

        </Grid>)
}
