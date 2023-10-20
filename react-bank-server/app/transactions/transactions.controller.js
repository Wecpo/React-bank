import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'
import 'dotenv/config'
import { json } from 'express'

export const createTransaction = asyncHandler(async (req, res) => {
	const { message, amount, to, from } = req.body
	const transaction = await prisma.transaction.create({
		data: { message, amount, to, from, maker_id: req.user.id },
	})

	res.json(transaction)
})
