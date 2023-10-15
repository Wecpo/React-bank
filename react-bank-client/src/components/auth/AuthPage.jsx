import { useForm } from 'react-hook-form'
import styles from './AuthPage.module.scss'
import { useState } from 'react'
import Logo from '../ui/logo/Logo'

const AuthPage = () => {
	const [signType, setSignType] = useState(true)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit = data => {
		console.log(data)
	}

	return (
		<div className={styles.container}>
			<Logo />

			<h1>{!signType ? 'Sign In' : 'Sign Up'}</h1>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				LOGIN
				<input
					className={styles.input}
					{...register('login', { required: true })}
				/>
				{errors.login && (
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
						onClick={() => setSignType(prevState => !prevState)}
					>
						{signType ? 'Sign In' : 'Sign Up'}
					</span>
				</span>
			</form>
		</div>
	)
}

export default AuthPage
