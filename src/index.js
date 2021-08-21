import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/styles';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import Store from './store'
const theme = createMuiTheme({
color:green
});

ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App  />
    </React.StrictMode>
</Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
