import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'
import 'dotenv/config'

export const getUsers = asyncHandler(async (req, res) => {
	const users = await prisma.user.findMany({
		include: {
			transcactions: true,
		},
	})

	res.json(users)
})
