import routes from './routes.api.js'
import styles from './Menu.module.scss'

const Menu = () => {
	return (
		<div className={styles.menu}>
			{routes.map(route => {
				return (
					<div
						style={
							route.name === 'Summary'
								? { fontWeight: '600' }
								: { color: 'gray' }
						}
						key={route.name[0]}
					>
						{route.name}
					</div>
				)
			})}
		</div>
	)
}

export default Menu
