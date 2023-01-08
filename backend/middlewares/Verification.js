import CreateError from "../utils/Error.js";
import jwt from "jsonwebtoken";

const verifyAccesToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return next(CreateError("Access token is required", 401));
    try {
        const token = authorization.split(" ")[1];
        let secret_key = ''
        req.user.role = "user" ? secret_key = process.env.USER_JWT_SECRET : secret_key = process.env.ADMIN_JWT_SECRET;
        console.log(secret_key);
        const payload = jwt.sign(token, secret_key)
        res.json(secret_key, payload)
        next();
    } catch (error) {
        next(error)
    }
}



export { verifyAccesToken }