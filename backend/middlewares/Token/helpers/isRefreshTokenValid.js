import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import User from "../../../models/User.js";
import refreshToken from "../../../utils/refreshToken.js";





function isValidRefreshToken(token) {
    const secret = process.env.REFRESH_SECRET;

    if (!token) throw new Error("Refesh token is required");

    try {
        jwt.verify(token, secret, async (err, decode) => {

            if (err) {
                // refresh token is expired 
                console.log('false');
                return false;
            }
            // refresh token is valid
            console.log('true');
            return true;
        })
    } catch (error) {
        throw new Error(error)
    }
}






//  Create new one and save it in the user model and return new user
async function newRefreshToken(id) {
    const user = await User.findOne({ _id: id });
    if (!user) throw new Error("No user Found");

    user.refresh_Token = refreshToken(user);

    await user.save();
    return user;
}


export { isValidRefreshToken, newRefreshToken };