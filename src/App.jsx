import CardMenu from './components/card-menu/CardMenu'
import Menu from './components/menu/Menu'
import PendingMoney from './components/pending-money/PendingMoney'
import Profile from './components/profile/Profile'
import RecentContacts from './components/recent-contacts/RecentContacts'
import Referral from './components/referral-code/Referral'
import TotalBalance from './components/total-balance/TotalBalance'
import TransactionsHistory from './components/transactions-history/TransactionsHistory'
import Logo from './components/ui/logo/logo'

const App = () => {
	return (
		<div className='container'>
			<div className='top'>
				<Logo />
				<Profile />
				<Menu />
			</div>
			<div className='left'>
				<CardMenu />
				<PendingMoney />
			</div>
			<div className='body'>
				<TotalBalance />
				<Referral />
				<RecentContacts />
				<TransactionsHistory />
			</div>
		</div>
	)
}

export default App
