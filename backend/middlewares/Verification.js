import CreateError from "../utils/Error.js";
import jwt from "jsonwebtoken";

const verifyAccesToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return next(CreateError("Access token is required", 401));
    try {
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (error) {
        next(error)
    }
}



export { verifyAccesToken }