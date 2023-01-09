import CreateError from "../utils/Error.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import jwtDecode from "jwt-decode";
import accesToken from "../utils/accesToken.js";

async function verifyRefreshToken(req, res, next) {
  const token = req?.cookies?.refresh_token;
  try {
    if (!token) return next(CreateError("Refresh Token is required", 401));
    const payload = jwt.verify(token, process.env.REFRESH_SECRET);
    if (!payload) return next(CreateError("Invalid refresh token", 401));
    const data =await jwtDecode(token);
    const { email } = data;
    const user = await User.findOne({ email });
    if (!user) return next(CreateError(`Nice try hacker :)`, 403));
    const newAccesToken = accesToken(user);
    req.token = newAccesToken;
    req.user = data;
    console.log('this refresh token');

    next()
  } catch (error) {
    next(error);
  }
}
export default verifyRefreshToken;
