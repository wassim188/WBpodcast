const mongoose = require("mongoose");
require("dotenv").config();
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;
const connect = () => {
    mongoose
    .connect(
      `mongodb+srv://${USER}:${PASSWORD}@cluster0.zjkcy7e.mongodb.net/PODCASTS?retryWrites=true&w=majority`
    )
    .then(() => console.log("DBS is connected"))
    .catch(err => console.log(err));

};
module.exports = connect;
