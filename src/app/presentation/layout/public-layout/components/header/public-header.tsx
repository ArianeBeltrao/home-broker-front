import * as React from 'react'
import { useRouter } from 'next/router'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useTheme } from '@material-ui/core/styles'

export default function PublicHeader() {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='relative'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.secondary.main}`
          }}
        >
          <Box>
            <Button
              variant='text'
              href='/'
              sx={{
                fontSize: '36px',
                fontFamily: 'Handjet',
                color: theme.palette.secondary.main
              }}
            >
              HB
            </Button>
          </Box>

          <Box>
            <Button
              sx={{
                paddingRight: '30px',
                color: theme.palette.secondary.main
              }}
              variant='text'
              href='/signIn'
            >
              Sign in
            </Button>
            {router.pathname === '/' && (
              <Button
                variant='contained'
                href='/checkout'
                sx={{
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.success.main
                }}
              >
                Open your account
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
