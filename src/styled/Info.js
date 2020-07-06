import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
`;

export const InfoText = styled.h3`
    color: ${props => props.theme.gray};
    font-weight: 700;
    font-size: 20px;
`;