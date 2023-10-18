import Header from '../ui/header/Header'
import styles from './TransactionsHistory.module.scss'
import { transactions } from './transactions.data'
import { useState } from 'react'
import { addDays } from 'date-fns'
import { da } from 'date-fns/locale'
import { formatCurrency } from '../../utils/formatCurrency'

const currentMonth = new Date()

const TransactionsHistory = () => {
	const transactions1 = transactions

	const defaultSelected = {
		from: new Date(),
		to: addDays(currentMonth, 4)
	}

	const [range, setRange] = useState(defaultSelected)

	const filteredTransactions = transactions1.filter(
		transaction =>
			new Date(transaction.date).getTime() >= new Date(range?.from).getTime() &&
			new Date(transaction.date).getTime() <= new Date(range?.to).getTime()
	)

	const formatDate = date => {
		const splitDate = date.split(' ')

		return (
			splitDate[0] +
			' ' +
			splitDate[1] +
			' ' +
			splitDate[2] +
			' ' +
			splitDate[3]
		)
	}

	const formatTime = date => {
		const splitDate = date.split(' ')
		return splitDate[5] + ' ' + splitDate[6]
	}

	var options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'short',
		hour: 'numeric',
		minute: '2-digit'
	}

	return (
		<div className={styles.container}>
			<Header
				name='Transactions History'
				calendar='true'
				range={range}
				setRange={setRange}
				currentMonth={currentMonth}
			/>
			<div className={styles.transactions}>
				{filteredTransactions.map(transaction => (
					<div className={styles.content} key={transaction.date}>
						<div className={styles.user}>
							<div
								className={
									transaction.type === '+'
										? styles.nameRingPlus
										: styles.nameRingMinus
								}
							>
								{transaction.name[0] + transaction.name[2].toUpperCase()}
							</div>
							<div className={styles.transactionInfo}>
								<span className={styles.name}>{transaction.name}</span>
								<span className={styles.message}>
									{transaction.type === '+' ? `Sent: ` : 'Received: '}
									{transaction.message ? transaction.message : ''}
								</span>
							</div>
						</div>
						<div className={styles.date}>
							<span className={styles.date1}>
								{formatDate(
									new Date(transaction.date).toLocaleString('en-GB', options)
								)}
							</span>
							<span className={styles.date2}>
								{formatTime(
									new Date(transaction.date).toLocaleString('en-US', options)
								)}
							</span>
						</div>
						<div
							className={
								transaction.type === '+' ? styles.sumPlus : styles.sumMinus
							}
						>
							<span className={styles.currencySpan}>USD</span>
							<span className={styles.amountSpan}>
								{formatCurrency.format(transaction.sum).slice(1, 10)}
							</span>
						</div>
					</div>
				))}
				{filteredTransactions.length === 0 && (
					<h1 style={{ marginLeft: 80, marginTop: 100 }}>
						There are no transactions in this date range
					</h1>
				)}
			</div>
		</div>
	)
}

export default TransactionsHistory
