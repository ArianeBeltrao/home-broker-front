import * as React from 'react'
import { useState } from 'react'
import { Grid, Typography, useMediaQuery } from '@mui/material'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PaypalCheckoutButton from './components/paypal/paypal-checkout-button'
import CreditCardButton from './components/credit-card/credit-card-button'
import PixButton from './components/pix/components/pix-button'
import Review from './components/review-info-form/review-info-form'
import { useTheme } from '@material-ui/core/styles'
import PixPage from './components/pix/pix'

export default function PaymentForm() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [creditCardChosen, setCreditCardChosen] = useState(false)
  const [pixOpen, setPixOpen] = useState(false)

  const handleCreditCardClick = () => {
    setCreditCardChosen(true)
  }
  const handlePixButtonClick = () => {
    setPixOpen(true)
  }
  const product = {
    description: 'Action test',
    price: '1200'
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'AT0GTG6PkJXuTKlr8a_X0PBeFvsz_DonadcsIT-cf-8_I0tcyBSv0Fh3DnuGzh6E8UYl0CUCteKRFO2l'
      }}
    >
      {!pixOpen && (
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: isMobile ? '20px' : '32px',
                paddingBottom: 2
              }}
            >
              Payment details
            </Typography>
            <CreditCardButton onClick={handleCreditCardClick} />
            {!creditCardChosen && <PaypalCheckoutButton product={product} />}

            {!creditCardChosen && <PixButton onClick={handlePixButtonClick} />}
          </Grid>
          <Grid xs={12} sm={6}>
            <Review />
          </Grid>
        </Grid>
      )}

      <Grid>
        {pixOpen && <PixPage />}
      </Grid>

    </PayPalScriptProvider>
  )
}
