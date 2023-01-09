import jwt from "jsonwebtoken";

function refreshToken(user) {
  const refresh_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.REFRESH_SECRET || "",
    {
      expiresIn: "1d",
    }
  );
  return refresh_token;
}
export default refreshToken;
