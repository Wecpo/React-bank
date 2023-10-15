import styles from './Header.module.scss'

const Header = ({ name, link = `` }) => {
	return (
		<div className={styles.header}>
			<span className={styles.name}>{name}</span>
			<span className={styles.link}>{link.name}</span>
		</div>
	)
}

export default Header
