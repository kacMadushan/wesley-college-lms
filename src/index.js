import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled/Global';
import { lightTheme } from './styled/Theme';

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);