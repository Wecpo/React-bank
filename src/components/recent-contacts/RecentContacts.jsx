import ContactIcon from '../ui/contact-icon/ContactIcon'
import styles from './RecentContacts.module.scss'
import { AvatarGenerator } from 'random-avatar-generator'
import { users } from './users.data'

const RecentContacts = () => {
	const formatName = name => {
		return name.split(' ')[0] + ' ' + name.split(' ')[1][0]
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div>Recent contacts</div>
				<div>All Contacts</div>
			</div>
			<div className={styles.users}>
				<ContactIcon type='add' />
				{users.map(user => (
					<ContactIcon
						key={user.name}
						name={formatName(user.name)}
						avatarPath={user.avatarPath}
					/>
				))}
			</div>
		</div>
	)
}

export default RecentContacts
