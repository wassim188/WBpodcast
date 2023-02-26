const { boolean } = require("joi");
const mongoose = require("mongoose");
const narratorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    narratorName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    narratorImg: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isNarrator: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Narrator = mongoose.model("narrator", narratorSchema);
