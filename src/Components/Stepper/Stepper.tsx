import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import './Stepper.sass'

function CustomStepper({ steps }:{ steps:{label:string,description:string}[] }) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{maxWidth: 400}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <h4>{step.label}</h4>
                        </StepLabel>
                        <StepContent>
                            <p>{step.description}</p>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            <Button
                color="secondary"
                variant="contained"
                onClick={ activeStep !== steps.length-1 ? handleNext : handleReset }
                sx={{ mt: 1, mr: 1 }}
            >{ activeStep !== steps.length-1 ? "Next" : "To begin" }</Button>
        </Box>
    );
}

export default CustomStepper;
