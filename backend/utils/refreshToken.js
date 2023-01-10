import jwt from "jsonwebtoken";

function refreshToken(user) {
  const refresh_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.REFRESH_SECRET || "",
    {
      expiresIn: "1s",
    }
  );
  return refresh_token;
}
export default refreshToken;
