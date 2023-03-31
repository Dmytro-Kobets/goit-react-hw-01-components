import { TransactionRow, TransactionCell } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const Transaction = ({ transaction }) => {
  return (
    <TransactionRow>
      <TransactionCell>{transaction.type}</TransactionCell>
      <TransactionCell>{transaction.amount}</TransactionCell>
      <TransactionCell>{transaction.currency}</TransactionCell>
    </TransactionRow>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
