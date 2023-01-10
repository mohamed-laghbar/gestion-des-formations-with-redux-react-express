import jwt from "jsonwebtoken";

function accesToken(user) {
  const acces_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role:user.role,
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "1d",
    }
  );
  return acces_token;
}
export default accesToken;
