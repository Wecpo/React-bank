import ContactIcon from '../ui/contact-icon/ContactIcon'
import styles from './RecentContacts.module.scss'
import { users } from './users.data'
import Header from '../ui/header/Header'

const RecentContacts = () => {
	const formatName = name => {
		return name.split(' ')[0] + ' ' + name.split(' ')[1][0]
	}

	return (
		<div className={styles.container}>
			<Header
				name='Recent Contacts'
				link={{ name: 'All Contacts', to: '/all-contacts' }}
			/>
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
