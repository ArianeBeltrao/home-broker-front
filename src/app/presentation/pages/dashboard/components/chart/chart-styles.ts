import { makeStyles, createStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      maxWidth: '780px',
      padding: '24px',
      marginBottom: 24,
      borderRadius: 4
    },
    title: {
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(19)
    },
    selectField: {
      width: 200,
      backgroundColor: 'pink'
    },
    activeButton: {
      color: theme.palette.primary.dark,
      fontSize: theme.typography.pxToRem(14),
      textTransform: 'capitalize'
    },
    desactivedButton: {
      color: '#8B90A0',
      fontSize: theme.typography.pxToRem(14),
      textTransform: 'capitalize'
    },
    divider: {
      margin: '12px 0px'
    },
    gridContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex'
    }
  })
)
