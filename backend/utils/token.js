import jwt from "jsonwebtoken";
const GenerateToken = (user) => {
    // create acces token for users
    const user_acces_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.USER_JWT_SECRET || "",
        { expiresIn: "1d" }
    );

    // create refresh token for users
    const user_refresh_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.USER_REFRESH_SECRET,
        { expiresIn: "5d" }
    );

    // create acces token for admin
    const admin_acces_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ADMIN_JWT_SECRET || "",
        { expiresIn: "1d" }
    );

    // create refresh token for admin
    const admin_refresh_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ADMIN_REFRESH_SECRET || "",
        { expiresIn: "5d" }
    );
    // console.log( user_acces_token, user_refresh_token, admin_acces_token, admin_refresh_token);

    return  user_acces_token, user_refresh_token, admin_acces_token, admin_refresh_token;
};
export default GenerateToken;
