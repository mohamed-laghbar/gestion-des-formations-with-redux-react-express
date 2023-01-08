import bcrypt from "bcryptjs";
import User from "../models/User.js";
import CreateError from "../utils/Error.js";
import generateToken from "../utils/token.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // check if the user exist
        const user = await User.findOne({ email });
        if (!user) return next(CreateError("Invalid Email", 400));
        req.user = user;

        // const isMatch = bcrypt.compare(password, user.password);
        const isMatch = password === user.password;

        if (!isMatch) return next(CreateError("Wrong Password", 400));

        //    get the role of that user to generate token accordenly
        const { role } = req.user;
        console.log('above gen');
        
        console.log(Tokens);
        switch (role) {
            case "user":
                await User.findByIdAndUpdate(user._id, {
                    refresh_Token: token.user_refresh_token,
                });
                req.user.acces_token = token.user_acces_token;
                await res.cookie("refresh_token", token.user_refresh_token, {

                    httpOnly: true,
                    maxAge: 7 * 24 * 60 * 60,
                    sameSite: "none",
                    secure: false,
                });
                res.status(200).json({
                    success: true,
                    token: req.user.acces_token,
                    message: "Login successful",
                });

                break;

            case "admin":
                await User.findByIdAndUpdate(user._id, {
                    refresh_Token: token.admin_refresh_token,
                });
                req.user.acces_token = token.admin_acces_token;
                res.cookie("refresh_token", token.admin_refresh_token, {
                    httpOnly: true,
                    maxAge: 7 * 24 * 60 * 60,
                    sameSite: "none",
                    secure: false,
                });
                res.status(200).json({
                    success: true,
                    token: req.user.acces_token,
                    message: "Login successful",
                    
                });

                break;


        }
    } catch (error) {
        next(error);
    }
};

 const privateRoute = (req, res,next)=>{

res.json('this a private route'
)
}

export  {login,privateRoute};
