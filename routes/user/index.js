const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/verifyToken")

router.post("/register",require("./register"));
router.post("/login",require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));
router.get("/Podcasts",auth, require("./getPodcasts"));
router.get("/Podcast/:id",auth, require("./getPodcast"));
router.post("/addReview/:podcastId",auth, require("./addReview"));
router.put("/updateReview/:reviewId",auth, require("./updateReview"));
router.delete("/deleteReview/:reviewId",auth, require("./deleteReview"));
router.get("/reviews/:id", auth, require("./getReviews"));


module.exports = router;