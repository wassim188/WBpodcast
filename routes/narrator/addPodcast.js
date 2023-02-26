const Podcast = require("../../models/Podcast");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    const { id } = req.auth;
    const { title, desc, date, duration, episodeNumber, audioURL } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    if (req.file) {
      const { path } = req.file;
      const { url } = await uploader(path);
      fs.unlinkSync(path);
      const newPodcast = await new Podcast({
        title,
        desc,
        date,
        duration,
        episodeNumber,
        audioURL,
        narrator: id,
        podcastImage: url,
      });
      const podcast = await newPodcast.save();
      return res.status(200).json({
        status: true,
        message: "you has been added successfully",
        data: podcast,
      });
    } else {
      const newPodcast = await new Podcast({
        title,
        desc,
        date,
        duration,
        episodeNumber,
        audioURL,
        narrator: id,
        podcastImage: "/uploads",
      });
      const podcast = await newPodcast.save();
      return res.status(200).json({
        status: true,
        message: "you has been added successfully",
        data: podcast,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error });
  }
};
