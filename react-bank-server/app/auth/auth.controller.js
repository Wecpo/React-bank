import { prisma } from '../prisma.js'
import asyncHandler from 'express-async-handler'
import { faker } from '@faker-js/faker'
import 'dotenv/config'
import * as argon2 from 'argon2'
import { generateToken } from './generate-token.js'
import { userFields } from '../utils/user.utils.js'

// @desc Auth user
// @route POST /api/auth/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	const isValidPassword = await argon2.verify(user.password, password)

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json({ user, token })
	} else {
		res.status(401)
		throw new Error('Email and password are not correct')
	}
})

// @desc Register user
// @route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await prisma.user.create({
		data: {
			email,
			password: await argon2.hash(password),
			name: faker.person.fullName(),
			images: '123',
		},
		select: userFields,
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
