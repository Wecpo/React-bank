import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AuthPage from '../components/auth/AuthPage'

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/auth',
		element: <AuthPage />
	}
])

export default router
