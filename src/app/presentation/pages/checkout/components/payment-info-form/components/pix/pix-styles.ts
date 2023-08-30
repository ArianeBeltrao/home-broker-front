import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      }

    },
    image: {
      paddingLeft: '80px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '130px',
        marginBottom: '20px'
      }
    },
    containerType: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: '140px',
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        paddingRight: '0',
      }
    },
    title: {
      fontSize: '14px',
      color: '#65676B'
    },
    price: {
      fontSize: '32px'
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textId: {
      margin: '15px',
      fontSize: '20px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      }
    },
    copyContainer: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    textNumber: {
      fontSize: '16px',
      marginBottom: '15px',
      paddingTop: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    },
    copyButton: {
      [theme.breakpoints.down('sm')]: {
        display:'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light
      }
    },
    secondText: {
      fontSize: '14px',
      marginBottom: '5px',
      marginTop: '15px',
      color: '#65676B'
    },
    thirdText: {
      fontSize: '12px',
      color: '#65676B'
    },
    textScan: {
      fontSize: '20px',
      margin: '10px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    button: {
      fontSize: '10px',
      color: '#65676B',
      marginTop: '20px',
      border: '1px solid #65676B',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      }
    }
  })
)
