import * as React from 'react'
import Typography from '@mui/material/Typography'
import Title from '../title/title'
import { WalletIcon } from '@/app/presentation/assets/icons'
import { WalletOutlined } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'

export default function Deposits() {
  return (
    <Box
      sx={{
        padding: '16px'
      }}
    >
      <WalletIcon />

      <Typography
        component='h2'
        variant='h6'
        sx={{
          color: 'white',
          paddingTop: '20px'
        }}
      >
        Current Balance
      </Typography>
      <Typography
        component='p'
        variant='h4'
        sx={{
          color: 'white'
        }}
      >
        $ 3,024.00
      </Typography>
    </Box>
  )
}
