import styled from 'styled-components';

export const Table = styled.table`
  font-size: 24px;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #00bcd5;
  color: white;
  text-transform: uppercase;
  border-right: white;
  th {
    padding: 20px 100px;
    &:not(:last-child) {
      border-right: 1px solid white;
    }
  }
`;

export const TransactionRow = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TransactionCell = styled.td`
  color: grey;
  padding: 20px 0;
  border-left: 1px solid rgba(199, 199, 199, 0.75);
  border-right: 1px solid rgba(199, 199, 199, 0.75);
  &:first-child {
    text-align: center;
    padding: 0 auto;
  }
`;
