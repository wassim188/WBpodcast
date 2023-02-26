const User = require("../../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL = process.env.EMAIL;

const { RegisterValidation } = require("../../utils/RegisterValidation");
module.exports = async (req, res) => {
  try {
    let { email, password, userName, confirm_password } = req.body;
    let { error } = await RegisterValidation({
      email,
      userName,
      password,
      confirm_password,
    });
    if (error) {
      return res
        .status(401)
        .json({ status: false, error: error.details[0].message });
    }
    let existedUser = await User.find({ $or: [{ email }, { userName }] });
    if (existedUser.length !== 0) {
      return res.status(401).json({
        status: false,
        existedEmailError:
          "narrator is already exist, please try another email or username",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let newUser = new User({
      email,
      password: hashedPassword,
      userName,
    });
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });
    const output = `
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Document</title>
  </head>
  <body>
    <style></style>
    <h1
      style="
        color: #069ba0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1.2 rem;
        font-weight: 700;
      "
    >
      Welcome ${userName} To My App
    </h1>
    <h2 style="color: #ade552; font-size: 1rem">
      your account has been created successfully
    </h2>
    <h3>one more step, please click the link below to verify your email</h3>
    <button style="all:unset;background-color:#9573fe;color: white;"><a href="http://localhost:5000/api/user/verifyEmail?email=${email}" target="_blank">Verify Your Account</a></button>
  </body>
</html>


`;
    const mailOptions = {
      from: '"My App" <wassimbjaoui10@gmail.com>"',
      to: email,
      subject: "Please verify your email",
      html: output,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    const user = await newUser.save();
    res.status(200).json({
      status: true,
      message: "your account has been successfully",
      data: user,
    });
  } catch (error) {
    if (err) throw err;
    res.status(400).json({ error });
  }
};
