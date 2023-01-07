const route = require('express').Router()
const Login = require('../controllers/AuthController')


route.post('/login',Login)




module.exports = route