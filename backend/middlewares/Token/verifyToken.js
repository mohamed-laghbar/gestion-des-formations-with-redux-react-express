// next(CreateError("Access token is required", 401));

import jwt from "jsonwebtoken";
import User from "../../models/User.js";
import jwt_decode from "jwt-decode";
import accesToken from "../../utils/accesToken.js";
import refreshToken from "../../utils/refreshToken.js";
import { isValidRefreshToken } from "./helpers/isRefreshTokenValid.js";
import CreateError from "../../utils/Error.js";
import { getAccesToken } from "./helpers/getAccesToken.js";

const verifyAccesToken = async (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  const token = getAccesToken(req, res, next);

  try {
    jwt.verify(token, secret || "", async (err, decode) => {
      if (err) {
        const refresh_token = await req?.headers?.cookie.split("=")[1];
        if (!refresh_token)
          return next(CreateError("Refresh token is required", 401));

        const data = await isValidRefreshToken(refresh_token);
        req.user = data.payload;
        req.token = data.newAccesToken;

        return next();
      }
      // acces token is valid
      console.log("acces token is valid");
      req.user = decode;
      req.token = token;
      return next();
    });
  } catch (error) {
    next(error);
  }
};

export { verifyAccesToken };
