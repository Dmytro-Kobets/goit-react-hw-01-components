import { Transaction } from './Transaction';
import { Table, TableHeader } from './TransactionHistory.styled';

export const TransactionTable = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
};
