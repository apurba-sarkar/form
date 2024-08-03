const jwt = require("jsonwebtoken");
const User2 = require("../models/user-model");

const authmiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      msg: "No token provided, authorization denied",
    });
  }

  try {
    // Extract the JWT token from the Authorization header
    const jwtToken = token.replace("Bearer ", "").trim();

    // Verify the token
    const decoded = jwt.verify(jwtToken, "ricky17sarkar");

    // Attach the decoded token (user information) to the request object
    req.user = decoded;

    // console.log("Decoded token:", decoded);

    const userData = await User2.findOne({ fullname: User2.fullname });
    console.log(userData)
    req.user = userData;
    // console.log(req.user);

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authmiddleware;
