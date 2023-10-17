import express from 'express'
import { getUsers } from './users.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/getAll').get(protect, getUsers)

export default router
