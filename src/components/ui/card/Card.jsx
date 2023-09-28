import styles from './Card.module.scss'

const Card = () => {
	return (
		<>
			<div className={styles.card}></div>
			<div className={styles.card2}>
				<span>{'Jelly Grande'}</span>
			</div>
		</>
	)
}

export default Card
