import styles from './Profile.module.scss'

const Profile = ({
	name = 'Jelly',
	avatarPath = '../../../public/avatar.jpg'
}) => {
	return (
		<div className={styles.profile}>
			<p>
				Welcome back, <span> {name}! </span>{' '}
				<img src={avatarPath} alt='avatar' />
			</p>
		</div>
	)
}

export default Profile
