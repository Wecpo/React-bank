import { createBrowserRouter } from 'react-router-dom'
import AuthPage from '../components/screens/auth-page/AuthPage'
import MainPage from '../components/screens/main-page/MainPage'

const router = createBrowserRouter([
	{ path: '/', element: <MainPage /> },
	{
		path: '/auth',
		element: <AuthPage />
	}
])

export default router
