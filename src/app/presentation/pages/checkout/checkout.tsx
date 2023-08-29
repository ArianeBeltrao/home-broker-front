import * as React from 'react'
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery
} from '@mui/material'
import UserInfoForm from './components/user-info-form/user-info-form'
import AddressForm from './components/address-info-form/address-info-form'
import PaymentForm from './components/payment-info-form/payment-info-form'
import { useTheme } from '@material-ui/core/styles'
import PublicLayout from '../../layout/public-layout/public-layout'
import { ArrowBackIosOutlined } from '@mui/icons-material'

const steps = ['Your information', 'Shipping address', 'Payment details']

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <UserInfoForm />
    case 1:
      return <AddressForm />
    case 2:
      return <PaymentForm />
    default:
      throw new Error('Unknown step')
  }
}

export default function Checkout() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <PublicLayout>
        <Container
          component='main'
          maxWidth={activeStep === 2 && !isMobile ? 'md' : 'sm'}
          sx={{ mb: 4 }}
        >
          <Paper
            variant='outlined'
            sx={{ my: { xs: 1, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Stepper
              activeStep={activeStep}
              sx={{
                pt: isMobile ? 0 : 3,
                pb: isMobile ? 2 : 5,
                pl: isMobile ? 0 : 0,
                // esse stepper ta com um bug, as vezes o circulo quando ta ativo fica azul e não preto (primary.main)
                '& .MuiStepIcon-root': {
                  color: theme.palette.primary.main
                },
                '& .MuiStepConnector-line': {
                  borderColor: theme.palette.primary.main
                },
                '& .MuiStepLabel-root': {
                  color: theme.palette.primary.main
                },
                '&.MuiStep-active': {
                  '& .MuiStepIcon-root': {
                    color: theme.palette.primary.main
                  },
                  '& .MuiStepConnector-line': {
                    borderColor: theme.palette.primary.main
                  },
                  '& .MuiStepLabel-root': {
                    color: theme.palette.primary.main
                  }
                }
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel sx={{ pb: 1 }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === 2 && (
              <Box>
                <Button
                  onClick={handleBack}
                  startIcon={<ArrowBackIosOutlined />}
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    marginBottom: 4,
                    minWidth: 40,
                    minHeight: 40,
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    textTransform: 'none',
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.light
                    },
                    '&:focus': {
                      backgroundColor: theme.palette.secondary.light
                    },
                    '& .MuiButton-startIcon': {
                      paddingLeft: 1
                    }
                  }}
                >  
                </Button>
              </Box>
            )}
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant='subtitle1'>
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep === 1 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.light
                      },
                      '&:focus': {
                        backgroundColor: theme.palette.secondary.light
                      }
                    }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </PublicLayout>
    </React.Fragment>
  )
}
