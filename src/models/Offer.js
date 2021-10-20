const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const offerSchema = new mongoose.Schema(
  {
    offerId: {
      type: Number,
      required: true,
      unique: true,
    },

    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Number,
      required: true,
    },

    noOfTimesUsed: {
      type:Number,
      required:true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema);
