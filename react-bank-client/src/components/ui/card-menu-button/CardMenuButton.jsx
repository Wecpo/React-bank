import Card from '../card/Card'
import styles from './CardMenuButton.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'

const CardMenuButton = ({ children, icon, handler }) => {
	return (
		<button className={styles.button} onClick={handler}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.content}>{children}</div>
			<div className={styles.arrow}>
				<MdArrowForwardIos style={{ backgroundColor: '#fff' }} />
			</div> 
		</button>
	)
}

export default CardMenuButton
