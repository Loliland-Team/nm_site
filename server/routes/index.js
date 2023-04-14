import express from 'express'
import * as u from '../controller/Users.js'
import { verifyToken } from '../middleware/VerifeToken.js'
import { refreshToken } from '../controller/RefreshToken.js'

const router = express.Router()

router.get('/api/users', verifyToken, u.getUsers)
router.post('/api/register', u.Register)
router.post('/api/login', u.Login)
router.get('/api/token', refreshToken)
router.post('/api/logout', u.Logout)

router.post('/api/setStatus', u.setUserStatus)

export default router