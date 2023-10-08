import styles from './Referral.module.scss'
import { AiOutlineCopy } from 'react-icons/ai'

const Referral = ({ name = 'Maksim Senin' }) => {
	const currentDateForRefCode =
		'-' +
		new Date().toLocaleString('en', { month: 'short' }).toUpperCase() +
		new Date().getFullYear()

	const nameForRefCode = name => {
		let [firstName, surName] = name.toUpperCase().split(' ')
		return firstName + surName.slice(0, 3)
	}

	const refCode = nameForRefCode(name) + currentDateForRefCode

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
