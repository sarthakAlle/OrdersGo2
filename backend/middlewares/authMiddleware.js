const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.isAuth= async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const decoded = await jwt.verify(token,process.env.JWT_SECRET);
    
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};