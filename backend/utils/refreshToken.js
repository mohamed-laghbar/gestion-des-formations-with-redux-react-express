const jwt = require("jsonwebtoken");
const refreshToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_SECRET, { expiresIn: "10d" });
};

module.exports = refreshToken;