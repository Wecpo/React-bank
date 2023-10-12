import { useForm } from 'react-hook-form'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()
	const onSubmit = data => console.log(data)
	console.log(watch('password')) // watch input value by passing the name of it
	console.log(errors)
	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			LOGIN
			<input {...register('login', { required: true })} />
			{/* include validation with required or other standard HTML validation rules */}
			{errors.login && <span>This field is required</span>}
			PASSWORD
			<input {...register('password', { required: true })} />
			{/* errors will return when field validation fails  */}
			{errors.password && <span>This field is required</span>}
			<input type='submit' />
		</form>
	)
}

export default AuthPage
