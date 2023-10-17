import Cookies from 'js-cookie'
import { $axios } from './axios'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set('mars', data.token)
			console.log(data)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
