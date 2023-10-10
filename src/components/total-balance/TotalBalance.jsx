import ActionButton from '../ui/actionButton/ActionButton'
import Header from '../ui/header/Header'
import styles from './TotalBalance.module.scss'
import {
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlinePlus
} from 'react-icons/ai'

const TotalBalance = ({ balance = `23993` }) => {
	const formatBalance = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		signDisplay: 'never'
	})

	const formattedBalance = formatBalance
		.format(balance)
		.slice(1, formatBalance.length)

	return (
		<div className={styles.container}>
			<Header name='Total Balance' />
			<div className={styles.balance}>
				{formattedBalance}
				<span>USD</span>
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
