import * as React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import pixLogo from '../../../../../../assets/img/pix-logo.png'
import { useStyles } from './pix-styles'
import { ContentCopyOutlined } from '@mui/icons-material'
import { useTheme } from '@material-ui/core/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const PixPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const pixNumber =
    '298498383br.gov.bcb.pix3948qrcodepix.bb.com.br/pix/v2/5bb38'

  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.image}>
          <Image src={pixLogo} alt='pix logo' width={80} height={28} />
        </Box>
        <Box className={classes.containerType}>
          <Typography className={classes.title}>Payment ammount</Typography>
          <Typography className={classes.price}>$34.06</Typography>
        </Box>
      </Box>

      <Box className={classes.text}>
        <Typography className={classes.textId}>
          Identifying your transaction with a unique ID
        </Typography>
        <Box className={classes.copyContainer} >
          <Typography className={classes.textNumber}>{pixNumber}</Typography>
          <CopyToClipboard text={pixNumber}>
            <Button className={classes.copyButton} >
              {!isMobile ? <ContentCopyOutlined /> : 'Copy PIX code'}
            </Button>
          </CopyToClipboard>
        </Box>

        <Typography className={classes.secondText}>
          How to pay PIX with the unique ID
        </Typography>
        <Typography className={classes.thirdText}>
          1. Copy the transaction code
        </Typography>
        <Typography className={classes.thirdText}>
          2. Use the ID code to identify your PIX payment in your bank app
        </Typography>
        <Typography className={classes.textScan}>
          Scan the QR Code with your bank app
        </Typography>

        <Button className={classes.button}>
          Cancel transaction
        </Button>
      </Box>
    </Box>
  )
}

export default PixPage
