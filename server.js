const express = require("express");
const mongoose = require("mongoose");
const connect = require("./utils/connect");
const app = express();
const path = require("path")
//connect to database
connect();

//express json middleware
app.use(express.json());

//multer middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//user middleware
app.use("/api/user", require("./routes/user"));

//narrator middleware
app.use("/api/narrator", require("./routes/narrator"));

//admin middleware
app.use("/api/admin", require("./routes/admin"));


//server is listening
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running...");
});
