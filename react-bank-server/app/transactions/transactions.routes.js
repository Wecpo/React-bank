import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { createTransaction } from './transactions.controller.js'

const router = express.Router()

router.route('/createTransaction').post(protect, createTransaction)

export default router
