import jwt from "jsonwebtoken";

function accesToken(user) {
  const acces_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "1s",
    }
  );
  return acces_token;
}
export default accesToken;
