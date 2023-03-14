const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/upload");

router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));
router.post(
  "/addPodcast",
  auth,
  upload.single("photo"),
  require("./addPodcast")
);
router.put(
  "/editPodcast/:podcastId",
  auth,
  upload.single("photo"),
  require("./editPodcast")
);
router.delete("/deletePodcast/:podcastId", auth, require("./deletePodcast"));
router.get("/Podcasts", auth, require("./getPodcasts"));
router.get("/myPodcasts", auth, require("./getOwnPodcasts"));
router.get("/Podcast/:id", auth, require("./getPodcast"));
router.get("/reviews/:id", auth, require("./getReviews"));


module.exports = router;
