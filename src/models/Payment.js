const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: Number,
      required: true,
      unique: true,
    },

    expectedPrice: {
      type: Number,
      required: true,
    },
    finalPrice: {
      type: Number,
      required: true,
    },

    paymentMode: {
      type: String,
      required: "Payment Mode is required",
      enum: ["Payment", "ATM Card", "Cash"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
