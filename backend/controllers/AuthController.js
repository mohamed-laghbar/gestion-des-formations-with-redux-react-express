import bcrypt from 'bcryptjs'

const login = async (req, res, next) => {

    try {
        const {email} = res.bo
    res.json('login function')
    
} catch (error) {
next(error)    
}

}



export default login