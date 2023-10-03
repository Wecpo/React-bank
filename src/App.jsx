import CardMenu from './components/card-menu/CardMenu'
import Layout from './components/layout/Layout'
import Menu from './components/menu/Menu'
import Profile from './components/profile/Profile'
import Card from './components/ui/card/Card'

const App = () => {
	return (
		<>
			<div className='top'>
				<Layout />
				<Profile />
				<Menu />
			</div>
			<div className='left'>
				<CardMenu />
			</div>
		</>
	)
}

export default App
