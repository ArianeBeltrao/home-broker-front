import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { defaultTheme } from '../app/presentation/styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

