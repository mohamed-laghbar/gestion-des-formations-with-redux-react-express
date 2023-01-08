import { Router } from 'express'
const route = Router()
import { login, privateRoute } from '../controllers/AuthController.js'
import { verifyAccesToken } from '../middlewares/Verification.js'
route.post('/login', login)
route.get('/private', privateRoute)



export default route