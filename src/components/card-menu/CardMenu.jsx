import ActionButton from '../ui/actionButton/ActionButton'
import CardMenuButton from '../ui/card-menu-button/CardMenuButton'
import Card from '../ui/card/Card'
import styles from './CardMenu.module.scss'
import {
	AiOutlineCreditCard,
	AiOutlineLock,
	AiOutlineSetting,
	AiOutlineMinus,
	AiOutlinePlus
} from 'react-icons/ai'
import { CgPassword } from 'react-icons/cg'

const CardMenu = () => {
	const onClick = () => {
		console.log(`123`)
	}

	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div>Cards</div>
				<div>Show All</div>
			</div>
			<div className={styles.card}>
				<Card />
			</div>

			<div className={styles.buttons}>
				<CardMenuButton
					children={'Show Card Details'}
					icon={<AiOutlineCreditCard />}
					handler={onClick}
				/>
				<CardMenuButton
					children={'Your PIN'}
					icon={<CgPassword />}
					handler={onClick}
				/>
				<CardMenuButton
					children={'Security Code'}
					icon={<AiOutlineLock />}
					handler={onClick}
				/>
				<CardMenuButton
					children={'Edit Limits'}
					icon={<AiOutlineSetting />}
					handler={onClick}
				/>
			</div>
			<div className={styles.addOrRemoveCard}>
				<ActionButton
					children={'Add Card'}
					icon={<AiOutlinePlus />}
					color={'purple'}
				/>
				<ActionButton
					children={'Remove'}
					icon={<AiOutlineMinus />}
					color={'red'}
				/>
			</div>
		</div>
	)
}

export default CardMenu
