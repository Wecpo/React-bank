import CardMenu from './components/card-menu/CardMenu'
import Layout from './components/layout/Layout'
import Menu from './components/menu/Menu'
import PendingMoney from './components/pending-money/PendingMoney'
import Profile from './components/profile/Profile'
import RecentContacts from './components/recent-contacts/RecentContacts'
import Referral from './components/referral-code/Referral'
import TotalBalance from './components/total-balance/TotalBalance'
import TransactionsHistory from './components/transactions-history/TransactionsHistory'

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
