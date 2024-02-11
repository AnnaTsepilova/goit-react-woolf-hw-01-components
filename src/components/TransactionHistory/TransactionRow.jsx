import css from './TransactionHistory.module.css';

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.tableBodyRow}>{type}</td>
      <td className={css.tableBodyRow}>{amount}</td>
      <td className={css.tableBodyRow}>{currency}</td>
    </tr>
  );
};

export default TransactionRow;
