import { createTheme } from '@material-ui/core'
import '@fontsource/handjet/500.css'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#01080e',
      light: '#d7f9ff',
      dark: '#2bdefd'
    },
    secondary: {
      main: '#146f9d',
      light: '#188fbf',
      dark: '#167eae',
      
    },
    success: {
      main: '#2bdefd'
    },
    text: {
      primary: '#000',
      secondary: '#9e9e9e'
    },
    background: {
      default: '#01080e'
    }
  },
  typography: {
    fontFamily: 'sans-serif, Handjet, satoshi, inter'
  },
});

export default defaultTheme;