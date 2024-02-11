import css from './TransactionHistory.module.css';
import TransactionRow from './TransactionRow';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead>
        <tr>
          <th className={css.tableHeadRow}>Type</th>
          <th className={css.tableHeadRow}>Amount</th>
          <th className={css.tableHeadRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
