const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: true,
    },

    roadNo: {
      type: Number,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
