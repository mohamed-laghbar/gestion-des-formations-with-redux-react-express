// next(CreateError("Access token is required", 401));

import jwt from "jsonwebtoken";
import User from '../../models/User.js';
import jwt_decode from "jwt-decode";
import accesToken from "../../utils/accesToken.js";
import refreshToken from "../../utils/refreshToken.js";
import { isValidRefreshToken, newRefreshToken } from './helpers/isRefreshTokenValid.js'
import CreateError from "../../utils/Error.js";


const verifyAccesToken = async (req, res, next) => {

    const secret = process.env.JWT_SECRET;
    const { authorization } = req.headers;

    if (!authorization) return next(CreateError("Access token is required", 401));
    const token = authorization.split(" ")[1];


    try {
        jwt.verify(token, secret || '', async (err, decode) => {

            if (err) {
                const refresh_token = await req?.headers?.cookie.split('=')[1];

                // acces token is expired

                // get the user from the expired token
                const payload = jwt_decode(token);
                const { id } = payload;


                // check if refresh token is exist and if it valid

                if (!refresh_token) return next(CreateError("Refresh token is required", 401));
                const isValid = isValidRefreshToken(refresh_token);
                if (!isValid) {

                    // create new refresh token and store it in the user model
                    const newUser = await newRefreshToken(id);
                    if (!newUser) return next(CreateError("Problem inUpdating the refresh token in the user model", 502));

                    // after validate the refresh token let's create new acces token
                    const newAccesToken = accesToken(newUser);
                    const paylaod = jwt_decode(newAccesToken)
                    req.paylaod1 = paylaod;
                    req.token = newAccesToken;

                    console.log('AT EXP and RT also EXP');
                    return next()
                }

                if (isValid) {
                    // acces token expired but the refresh token is valid
                    const user = User.findOne({id})
                    const newAccesToken = accesToken(user);
                    const paylaod = jwt_decode(newAccesToken)
                    req.payload = paylaod;
                    req.token = newAccesToken;
                    console.log('acces token expired but the refresh token is valid')
                    return next()
                }
            }
            // acces token is valid
            console.log('acces token is valid');
            req.decode = decode;
            req.token = token;
            return next()
        });



    } catch (error) {
        next(error);
    }

}




export { verifyAccesToken };

