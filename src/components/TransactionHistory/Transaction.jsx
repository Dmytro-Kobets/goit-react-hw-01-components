import { TransactionRow, TransactionCell } from './TransactionHistory.styled';

export const Transaction = ({ transaction }) => {
  return (
    <TransactionRow>
      <TransactionCell>{transaction.type}</TransactionCell>
      <TransactionCell>{transaction.amount}</TransactionCell>
      <TransactionCell>{transaction.currency}</TransactionCell>
    </TransactionRow>
  );
};
