const express = require("express");
const router = express.Router();
const verify = require("../../middlewares/adminVerify");

router.post("/login", require("./login"));
router.put("/banUser/:id", verify, require("./banUser"));
router.put("/banNarrator/:id", verify, require("./banNarrator"));
router.get("/users", verify, require("./getUsers"));
router.get("/narrators", verify, require("./getNarrators"));
router.delete("/deletePodcast/:podcastId", verify, require("./deletePodcast"));
router.delete("/deleteReview/:reviewId", verify, require("./deleteReview"));


module.exports = router;
