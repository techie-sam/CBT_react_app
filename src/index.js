import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
// import blue from "@material-ui/core/colors";
// import pink from "@material-ui/core/colors";
import MainRouter from './Routes/MainRouter';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { CssVarsProvider, ThemeProvider } from '@mui/joy';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    {/* <MuiThemeProvider theme={theme}> */}
    {/* <CssVarsProvider>2 */}
        <MainRouter>
    <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
        </MainRouter>
    {/* </CssVarsProvider>2 */}
      </Provider>
    {/* </MuiThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
