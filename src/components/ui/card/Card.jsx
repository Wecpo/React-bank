import styles from './Card.module.scss'

const Card = ({
	cardName = 'Jelly Grande',
	cardNumber = '0123 4567 8910',
	cardCVV = '123'
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.card}></div>
		</div>
	)
}

export default Card
