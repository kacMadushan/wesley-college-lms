import styled, { css } from 'styled-components';

export const StyleButton = styled.button`
    display: inline-block;
    text-align: center;
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 14px;
    font-family: 'Karla', sans-serif;
    text-transform: uppercase;
    line-height: 1;
    padding: 18px 32px;
    border-radius: 0;
    border: none;
    background-color: ${props => props.theme.blue500};
    box-shadow: 0 11px 22px rgba(34, 34, 34, 0.2);

    &:focus {
        outline: none;
        box-shadow: 0 2px 6px rgba(34, 34, 34, 0.5);
    }
`;

export const DefaultLink = styled.a`
    display: block;
    color: ${props => props.theme.blue400};
    font-weight: 400;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
`;

export const StyleLink = styled.a`
    display: inline-block;
    text-align: center;
    color: ${props => props.theme.blue500};
    font-weight: 700;
    font-size: 13px;
    font-family: 'Karla', sans-serif;
    text-transform: uppercase;
    line-height: 1;
    padding: 8px 16px;
    border-radius: 0;
    border: 1px solid ${props => props.theme.blue500};
    background-color: ${props => props.theme.white};

    &:hover {
        text-decoration: none;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.blue500};
    }
`;