import styled from 'styled-components';

export const Table = styled.table.attrs({
    className: 'table'
})`
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.white};
`;

export const TableHeading = styled.th`
    color: ${props => props.theme.blue500};
    font-weight: 700;
    font-size: 15px;
    border-top: 1px solid ${props => props.theme.white};
`;

export const TableData = styled.td`
    color: ${props => props.theme.gray};
    font-weight: 400;
    font-size: 15px;
`;