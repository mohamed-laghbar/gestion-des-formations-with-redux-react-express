import bcrypt from "bcryptjs";
import User from "../models/User.js";
import  CreateError from '../utils/Error.js'

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check if the user exist
        const user = User.findOne({ email });
        if(!user) return next(CreateError('Invalid Email', 400))

       const isMatch = bcrypt.compare(password,user.password);

       if(!isMatch) return next(CreateError('Wrong Password', 400));

       
        
    } catch (error) { }
};

export default login;
