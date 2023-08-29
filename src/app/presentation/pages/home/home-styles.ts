import { makeStyles, createStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column', // Coluna em telas pequenas
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '70px',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row', // Coluna em telas pequenas
        alignItems: 'flex-start',
        padding: '100px'
      }
    },
    title: {
      fontFamily: 'Handjet',
      color: '#2bdefd',
      fontSize: '60px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '100px'
      }
    },
    subtitle: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: 'text.secondary',
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px'
      }
    },
    button: {
      fontFamily: 'Roboto',
      marginTop: '20px'
    },
    image: {
      marginTop: '20px',
      display: 'none',
      borderRadius: '18px',
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        marginTop: '0',
        display: 'block'
      }
    }
  })
)
