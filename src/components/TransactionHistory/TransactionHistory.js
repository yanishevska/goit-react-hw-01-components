import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableTitles}>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableList}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={styles.tableItem}>
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.defaultProps = {
  type: "Type",
  amount: "0",
  currency: "Currency",
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
