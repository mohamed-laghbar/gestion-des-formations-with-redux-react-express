import CreateError from "../utils/Error.js";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import User from "../models/User.js";
import refreshToken from "../utils/refreshToken.js";
import accesToken from "../utils/accesToken.js";

const verifyAccesToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!authorization) return next(CreateError("Access token is required", 401));

  const token = authorization.split(" ")[1];
  if (!token) return next(CreateError("Access token is required", 401));


  jwt.verify(token, JWT_SECRET || "", async (err, decode) => {

    if (err && err?.name === "TokenExpiredError") {
      // acces token are expire

      const payload = jwt_decode(token);
      const { id } = payload;
      const user = await User.findOne({ _id: id });
      if (!user) return next(CreateError("Invalid acces token", 401));

      const refresh_token = await req?.cookies?.refresh_token;
      if (!refresh_token)
        return next(CreateError("Refresh Token is required", 401));

      jwt.verify(refresh_token, process.env.REFRESH_SECRET, async (err, decode) => {
        if (err?.name === "TokenExpiredError") {
          // both acces and refresh token are expired

          const payload = jwt.verify(refresh_token, process.env.REFRESH_SECRET, { ignoreExpiration: true });

          const { id } = payload;
          const user = await User.findOne({ _id: id });
          if (!user) return next(CreateError("Invalid refresh token", 401));
          const new_refresh_token = refreshToken(user);
          user.refresh_Token = new_refresh_token;
          await user.save();

          const new_acces_token = accesToken(user);

          req.token = new_acces_token;
          req.user = payload;
          req.refresh_token = new_refresh_token;

          console.log("acces token expired and the refresh token also expired");

           next();
        }
        // acces token is expire but refresh token is valid

        const new_acces_token = accesToken(user);
        req.token = new_acces_token;
        console.log("acces token is expire but refresh token is valid");
         next();
      }
      );
    }
    // valid acces token

    console.log("valid acces token");
     next();
  });

};

export { verifyAccesToken };
