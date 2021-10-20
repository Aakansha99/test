const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const driverStatusSchema = new mongoose.Schema(
  {
    accountStatus: {
      type: String,
      required: "Account Status is required",
      enum: ["Active", "Disabled"],
    },

    ridingStatus: {
      type: String,
      required: "Riding Status is required",
      enum: ["Available", "Not available"],
    },

    onRide: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DriverStatus", driverStatusSchema);
