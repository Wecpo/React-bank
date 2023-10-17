import 'colors'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan'
import { prisma } from './app/prisma.js'
import authRoutes from './app/auth/auth.routes.js'
import usersRoutes from './app/users/users.routes.js'
// import { errorHandler, notFound } from './app/middleware/error.middleware.js'

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(cors())
	app.use(express.json())

	// const __dirname = path.resolve()

	// app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))
	app.use('/api/auth', authRoutes)
	app.use('/api/users', usersRoutes)
	// app.use('/api/exercises', exerciseRoutes)
	// app.use('/api/workouts', workoutRoutes)

	// app.use(notFound)
	// app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
				.bold,
		),
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
