import ActionButton from '../ui/actionButton/ActionButton'
import Header from '../ui/header/Header'
import styles from './TotalBalance.module.scss'
import {
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlinePlus
} from 'react-icons/ai'

const TotalBalance = ({ balance = `29,475.00` }) => {
	const formatBalance = balance => {
		console.log(balance.split(' ').join('-'))
	}

	return (
		<div className={styles.container}>
			<Header name='Total Balance' />
			<div className={styles.balance}>
				{balance} <span>USD</span>
			</div>
			<div className={styles.buttons}>
				<ActionButton
					children={'Send'}
					color={'purple'}
					icon={<AiOutlineArrowUp />}
				/>
				<ActionButton
					children={'Request'}
					color={''}
					icon={<AiOutlineArrowDown />}
				/>
				<ActionButton children={'Top Up'} icon={<AiOutlinePlus />} />
			</div>
		</div>
	)
}

export default TotalBalance
