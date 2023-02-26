const express = require("express");
const router = express.Router();

router.post("/register",require("./register"));
router.get("/login",require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));


module.exports = router;