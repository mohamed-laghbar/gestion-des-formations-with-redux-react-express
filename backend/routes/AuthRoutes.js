import { Router } from 'express'
const route = Router()
import login from '../controllers/AuthController.js'

route.post('/login',login)




export default route