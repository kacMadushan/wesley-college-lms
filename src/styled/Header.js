import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: 24px;
`;

export const HeaderTitle = styled.h1`
    color: ${props => props.theme.blue500};
    font-weight: 700;
    font-size: 62px;
    list-style: 72px;
`;

export const HeaderSubTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    list-style: 24px;
`;