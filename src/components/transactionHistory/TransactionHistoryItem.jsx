import css from "./TransactionHistoryItem.module.css"

const TransactionHistoryItem = ({ type, amount, currency }) => {

  return(
    <tr className={css.transactionHistory_item}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </tr>
  )
}

export default TransactionHistoryItem;