import bcrypt from "bcryptjs";
import User from "../models/User.js";
import CreateError from '../utils/Error.js'
import GenerateToken from '../utils/token.js'

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check if the user exist
        const user = await User.findOne({ email });
        if (!user) return next(CreateError('Invalid Email', 400))
        req.user = user;


        // const isMatch = bcrypt.compare(password, user.password);
        const isMatch = password === user.password;

        if (!isMatch) return next(CreateError('Wrong Password', 400));

        //    get the role of that user to generate token accordenly 
        const { role } = req.user;

        switch (role) {
            case 'user':

                const { user_acces_token, user_refresh_token } = GenerateToken(req.user);
                res.json(`user token is ${user_refresh_token, user_acces_token}`)

                break;

            case 'admin':
                const { admin_acces_token, admin_refresh_token } = GenerateToken(user);
                res.json(`admin token is ${admin_acces_token, admin_refresh_token}`);
                
                break;

            default:
                break;
        }



    } catch (error) {
        next(error)
    }
};

export default login;
