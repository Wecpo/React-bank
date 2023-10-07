import styles from './Referral.module.scss'
import { AiOutlineCopy } from 'react-icons/ai'

const Referral = ({ refCode = 'JELLYPOENYA-SEP2023' }) => {
	return (
		<div className={styles.container}>
			<img src='../../../public/people.png' alt='zdes doljna bit kartinka' />
			<div>Invite a friend with code below and</div>
			<div>redeem special bonus USD 15 from us!</div>
			<span>
				{refCode}
				<div>
					<AiOutlineCopy />
				</div>
			</span>
		</div>
	)
}

export default Referral
