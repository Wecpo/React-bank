// import CardMenu from './components/card-menu/CardMenu'
// import Menu from './components/menu/Menu'
// import PendingMoney from './components/pending-money/PendingMoney'
// import Profile from './components/profile/Profile'
// import RecentContacts from './components/recent-contacts/RecentContacts'
// import Referral from './components/referral-code/Referral'
// import TotalBalance from './components/total-balance/TotalBalance'
// import TransactionsHistory from './components/transactions-history/TransactionsHistory'
// import Logo from './components/ui/logo/logo'

import CardMenu from '../../card-menu/CardMenu'
import Menu from '../../menu/Menu'
import PendingMoney from '../../pending-money/PendingMoney'
import Profile from '../../profile/Profile'
import RecentContacts from '../../recent-contacts/RecentContacts'
import Referral from '../../referral-code/Referral'
import TotalBalance from '../../total-balance/TotalBalance'
import TransactionsHistory from '../../transactions-history/TransactionsHistory'
import Logo from '../../ui/logo/Logo'
import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Logo />
				<Profile />
				<Menu />
			</div>
			<div className={styles.left}>
				<CardMenu />
				<PendingMoney />
			</div>
			<div className={styles.body}>
				<TotalBalance />
				<Referral />
				<RecentContacts />
				<TransactionsHistory />
			</div>
		</div>
	)
}

export default MainPage
