import styles from './ContactIcon.module.scss'

const ContactIcon = ({ type = 'user', name, avatarPath }) => {
	if (type === 'add') {
		return (
			<div className={styles.add}>
				<div>+</div>
				<span>Add</span>
			</div>
		)
	} else
		return (
			<div className={styles.user}>
				<img src={avatarPath} alt='avatar' />
				<span>{name}</span>
			</div>
		)
}

export default ContactIcon
