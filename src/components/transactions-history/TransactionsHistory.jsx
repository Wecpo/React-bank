import Header from '../ui/header/Header'
import styles from './TransactionsHistory.module.scss'

const TransactionsHistory = ({
	transaction = {
		name: 'Alina Sooela',
		message: 'Meal Bills',
		date: '27.09.2023 13:05',
		sum: 275,
		transactionType: 'sent'
	}
}) => {
	return (
		<div className={styles.container}>
			<Header name={'Transactions History'} />
			<div className={styles.content}>
				<div className={styles.user}>{transaction.name}</div>
				<div className={styles.date}>{transaction.date}</div>
				<div className={styles.sum}>USD {transaction.sum}</div>
			</div>
		</div>
	)
}

export default TransactionsHistory
