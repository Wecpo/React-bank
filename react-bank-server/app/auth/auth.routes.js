import express from 'express'
import { authUser, registerUser } from './auth.controller.js'

const router = express.Router()

router.route('/signIn').post(authUser)
router.route('/signUp').post(registerUser)

export default router
