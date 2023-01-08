import jwt from "jsonwebtoken";
const generateToken = (user) => {
    // create acces token for users
    const user_acces_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.USER_JWT_SECRET || "",
        { expiresIn: "1h" }
    );

    // create refresh token for users
    const user_refresh_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.USER_REFRESH_SECRET,
        { expiresIn: "1d" }
    );

    // create acces token for admin
    const admin_acces_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ADMIN_JWT_SECRET || "",
        { expiresIn: "1h" }
    );

    // create refresh token for admin
    const admin_refresh_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ADMIN_REFRESH_SECRET || "",
        { expiresIn: "1d" }
    );
    // console.log( user_acces_token, user_refresh_token, admin_acces_token, admin_refresh_token);

    const Tokens = {
        user_acces_token,
        user_refresh_token,
        admin_acces_token, 
        admin_refresh_token
    }
    // console.log(Tokens.admin_acces_token);

    return Tokens;
};
export default generateToken;
