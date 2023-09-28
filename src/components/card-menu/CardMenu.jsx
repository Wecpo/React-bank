import Card from '../ui/card/Card'
import styles from './CardMenu.module.scss'

const CardMenu = () => {
	return (
		<>
			<div className={styles.header}>
				<div>Cards</div>
				<div>Show All</div>
			</div>
			<Card />
		</>
	)
}

export default CardMenu
