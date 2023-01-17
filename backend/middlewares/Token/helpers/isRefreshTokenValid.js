import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import User from "../../../models/User.js";
import accesToken from "../../../utils/accesToken.js";
import refreshToken from "../../../utils/refreshToken.js";

async function isValidRefreshToken(token) {
  const secret = process.env.REFRESH_SECRET;

  try {

    return jwt.verify(token, secret, async (err, decode) => {
      if (err) {
        // refresh token is expired
        let payload = jwt_decode(token);
        const { id } = payload;
        const newUser = await newRefreshToken(id);
        if (!newUser) throw new Error("no user found with that id");

        const newAccesToken = accesToken(newUser);
         paylaod = jwt_decode(newAccesToken);

        console.log("Acces token and refresh token both expired");

        const data = {
          payload,
          newAccesToken,
        };

        return data;
      }

      // refresh token is valid
      let payload = jwt_decode(token);
      const { id } = payload;

      const user = await User.findOne({
        _id: id,
      });

      const newAccesToken = accesToken(user);
      payload = jwt_decode(newAccesToken);

      const data = {
        payload,
        newAccesToken,
      };
      return data;
    });
  } catch (error) {
    return false;
  }
}

//  Create new one and save it in the user model and return new user
async function newRefreshToken(id) {
  const user = await User.findOne({
    _id: id,
  });
  if (!user) throw new Error("No user Found");

  const newRefreshToken = refreshToken(user);
  user.refresh_Token = newRefreshToken;
  await user.save();
  return user;
}

export { isValidRefreshToken, newRefreshToken };
