const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const VehicleSchema = new mongoose.Schema(
  {
    Vehical_Type: {
      type: String,
      required: "Vehical_Type is required",
    },
    length: {
      type: Number,
      required: "Length of vehicle is required",
      unique: true,
    },
    width: {
      type: Number,
      required: "Width of vehicle is required",
      unique: true,
    },
    height: {
      type: Number,
      required: "Height of vehicle is required",
      unique: true,
    },
    weight: {
      type: Number,
      required: "Weight of vehicle is required",
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle_Info", VehicleSchema);
