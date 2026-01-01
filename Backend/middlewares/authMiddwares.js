const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(404)
        .json({ success: false, message: "Not authenticate" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId, email: decoded.email };
    return next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Not authenticated" });
  }
};
