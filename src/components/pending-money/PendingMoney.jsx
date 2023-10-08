import styles from './PendingMoney.module.scss'
import { LuMousePointerClick, LuArrowRight } from 'react-icons/lu'

const PendingMoney = () => {
	return (
		<div className={styles.container}>
			<LuMousePointerClick />
			<div>You have USD 1.000 pending money,</div>
			<div>it will be ready in 2 business days.</div>
			<span>
				Get your money now <LuArrowRight />
			</span>
		</div>
	)
}

export default PendingMoney
