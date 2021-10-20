const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const ratingSchema = new mongoose.Schema(
  {
    ratingId: {
      type: Number,
      required:true,
      unique:true,
    },

    rating: {
      type: Number,
    },
    totalRating: {
      type: Number,
    },
    totalNumberOfRating:{
        type:Number,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
