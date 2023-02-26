const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/upload");


router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));
router.post("/addPodcast", auth, upload.single("photo"), require("./addPodcast"));

module.exports = router;
