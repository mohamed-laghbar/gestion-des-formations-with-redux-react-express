import bcrypt from "bcryptjs";
import User from "../models/User.js";
import CreateError from "../utils/Error.js";
import accesToken from "../utils/accesToken.js";
import refreshToken from "../utils/refreshToken.js";
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if the user exist
    const user = await User.findOne({
      email,
    });
    if (!user) return next(CreateError("Invalid Email", 400));

    // const isMatch = bcrypt.compare(password, user.password);
    const isMatch = password === user.password;

    if (!isMatch) return next(CreateError("Wrong Password", 400));

    //    get the role of that user to generate token accordenly
    const refresh_token = refreshToken(user);
    const acces_token = accesToken(user);
    switch (user.role) {
      case "user":
        await User.findByIdAndUpdate(user._id, {
          refresh_Token: refresh_token,
        });
        res.cookie("refresh_token", refresh_token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60,
          sameSite: "none",
          secure: false,
        });
        res.status(200).json({
          success: true,
          token: acces_token,
          message: "Login successful by user",
          role: user.role,
        });

        break;

      case "admin":
        await User.findByIdAndUpdate(user._id, {
          refresh_Token: refresh_token,
        });
        res.cookie("refresh_token", refresh_token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60,
          sameSite: "none",
          secure: false,
        });
        res.status(200).json({
          success: true,
          token: acces_token,
          message: "Login successful by admin",
          role: user.role,
        });

        break;
    }
  } catch (error) {
    next(error);
  }
};

const privateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    token: req.token,
    user: req.user,
  });
  next();
};

export { login, privateRoute };
