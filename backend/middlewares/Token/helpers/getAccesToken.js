import CreateError from "../../../utils/Error.js";



export function getAccesToken (req,res,next){
    const { authorization } = req.headers;

    if (!authorization) return next(CreateError("Access token is required", 401));
    const token = authorization.split(" ")[1];
    return token;

}