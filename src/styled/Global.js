import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.blue400};
        font-weight: normal;
        font-size: 14px;
        font-family: 'Karla', sans-serif;
        background-color: ${props => props.theme.light}
    }

    h1,
    h2,
    h3 {
        font-family: 'Poppins', sans-serif;
    }

    .form-control {
        color: ${props => props.theme.black};
        font-weight: 400;
        font-size: 16px;
        height: 48px;
        font-family: 'Poppins', sans-serif;

        &:focus {
            box-shadow: none;
        }
    }
`;