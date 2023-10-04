import Balance from './components/balance/Balance'
import CardMenu from './components/card-menu/CardMenu'
import Layout from './components/layout/Layout'
import Menu from './components/menu/Menu'
import Profile from './components/profile/Profile'
import Referral from './components/referral/Referral'
import Card from './components/ui/card/Card'

const App = () => {
	return (
		<div className='container'>
			<div className='top'>
				<Layout />
				<Profile />
				<Menu />
			</div>
			<div className='left'>
				<CardMenu />
			</div>
			<div className='body'>
				<Balance />
				<Referral />
			</div>
		</div>
	)
}

export default App
