import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, Stepper, Step, StepLabel } from '@mui/material';
import SelectAccountTypeSlide from './SelectAccountTypeSlide';
import Header from './Header';
import LinkedInLinkSlide from './LinkedInLinkSlide';
import LinkedInLoginForm from './LinkedInLoginForm';

export default function LoginPage({userType}) {
    const [loading, setLoading] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1))
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1))
    }
    const steps = [['Select Account Type', <SelectAccountTypeSlide handleNext={handleNext} handleBack={handleBack}/>], ['Connect LinkedIn Profile', <LinkedInLinkSlide handleNext={handleNext} handleBack={handleBack}/>], ['Login With LinkedIn', <LinkedInLoginForm handleNext={handleNext} handleBack={handleBack}/>]]

    return (
        <>
        <Header/>
        <Grid
        container
        minHeight="80vh"
        justifyContent="center"
        alignItems="center"
        direction="column">
            <Grid item>
                <Card>
                    <CardContent>
                        <Grid container direction="column" rowSpacing={"50px"}>
                            <Grid item>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((stepItem, index)=> {
                                        return(
                                            <Step key={index}>
                                                <StepLabel>{stepItem[0]}</StepLabel>
                                            </Step>
                                        )
                                    })}
                                </Stepper>
                            </Grid>
                            <Grid item>
                                    {steps[activeStep][1]}
                                </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}
