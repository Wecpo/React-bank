import { useForm } from 'react-hook-form'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import Logo from '../../ui/logo/Logo'
import authService from '../../../services/auth.service'

const AuthPage = () => {
	const [signType, setSignType] = useState('signUp')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()

	const onSubmit = data => {
		authService.main(data.email, data.password, signType)
		reset()
	}

	return (
		<div className={styles.container}>
			<Logo />
			<h1>{signType === 'signIn' ? 'Sign In' : 'Sign Up'}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				EMAIL
				<input
					className={styles.input}
					{...register('email', { required: true })}
				/>
				{errors.email && (
					<span className={styles.error}>This field is required</span>
				)}
				PASSWORD
				<input
					className={styles.input}
					{...register('password', { required: true })}
					type='password'
				/>
				{errors.password && (
					<span className={styles.error}>This field is required</span>
				)}
				<input className={styles.input} type='submit' value={'Send'} />
				<span>
					{!signType
						? 'Do not you have an account yet?'
						: `You already have an account?`}

					<span
						className={styles.authToggleSpan}
						onClick={() =>
							setSignType(prevState =>
								prevState === 'signIn' ? 'signUp' : 'signIn'
							)
						}
					>
						{signType === 'signUp' ? 'Sign In' : 'Sign Up'}
					</span>
				</span>
			</form>
		</div>
	)
}

export default AuthPage
