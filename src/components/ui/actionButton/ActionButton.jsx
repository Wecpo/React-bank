import styles from './ActionButton.module.scss'

const ActionButton = ({ children, icon = `-`, handler, color }) => {
	const currentStyle =
		color === 'purple' ? styles.purpleButton : styles.redButton
	return (
		<button className={currentStyle} onClick={handler}>
			<span>
				{children}
				{icon}
			</span>
		</button>
	)
}

export default ActionButton
