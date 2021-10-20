const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const walletSchema = new mongoose.Schema(
  {
    walletId: {
      type: Number,
      required: true,
      unique: true,
    },

    basePercentage: {
      type: Number,
      required: true,
    },
    walletAmount: {
      type: Number,
      required: true,
    },

    isBlocked: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
