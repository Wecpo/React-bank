import styles from './ActionButton.module.scss'

const ActionButton = ({ children, icon, handler, color }) => {
	let currentColor = ''
	switch (color) {
		case 'purple':
			currentColor = styles.purpleButton
			break
		case 'red':
			currentColor = styles.redButton
			break
		default:
			currentColor = styles.grayButton
	}
	return (
		<button className={currentColor} onClick={handler}>
			<span>
				{children}
				{icon}
			</span>
		</button>
	)
}

export default ActionButton
