const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        error: "Invalid email or password, please try again",
      });
    }
    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      return res.status(401).json({
        status: false,
        error: "Invalid email or password, Please try again",
      });
    }
    delete user.password;
    const token = jwt.sign(
      {
        email: user.email,
        isBanned: user.isBanned,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        id: user._id,
      },
      SECRET_KEY,
      { expiresIn: "1d" }
    );
    console.log(token);
    res.status(200).json({
      status: true,
      data: {
        isBanned: user.isBanned,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        id: user._id,
        token,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
};
