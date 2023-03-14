const mongoose = require("mongoose")
//const Narrator = require("./Narrator")
const podcastSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    podcastImage:{
      type:String,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    audioURL: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    narrator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Narrator",
    },
  },
  { timestamps: true }
);
module.exports = Podcast = mongoose.model("Podcast",podcastSchema)