import styles from './Card.module.scss'

const Card = ({
	cardName = 'Jelly Grande',
	cardNumber = '0123 4567 8910',
	cardCVV = 'CVV'
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.secondCard}></div>
			<div className={styles.card}>
				<span className={styles.cardName}>{cardName}</span>
				<span className={styles.cardNumber}>
					{cardNumber}
					<div>{cardCVV}</div>
				</span>
			</div>
		</div>
	)
}

export default Card
