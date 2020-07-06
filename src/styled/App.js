import styled from 'styled-components';

export const HeroSection = styled.section`
    display: block;
    text-align: center;
    padding: 30px 0;
    background-color: ${props => props.theme.white}
`;

export const Panel = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 30px;
    margin: 40px 0;
    border-radius: 3px;
    background-color: ${props => props.theme.white};
`;