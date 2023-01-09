import CreateError from "../utils/Error.js";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
import User from "../models/User.js";
import verifyRefreshToken from "../middlewares/verifyRefreshToken.js";

const verifyAccesToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(CreateError("Access token is required", 401));
  try {
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
      if (err) {
        if (err?.message == "jwt expired") {
          await verifyRefreshToken(req, res, next);
          next();
        } else next(CreateError("invalid token", 401));
      }

      req.user = decode;
      req.token = token;
      console.log("this acces token");
    });

    next();
  } catch (error) {
    next(error);
  }
};

export { verifyAccesToken };
