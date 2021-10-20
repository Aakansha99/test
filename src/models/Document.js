const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const documentSchema = new mongoose.Schema(
  {
    documentId: {
      type: Number,
      required: true,
      unique: true,
    },

    adhaar: {
      type: String,
      required: true,
    },
    PAN: {
      type: String,
      required: true,
    },

    drivingLicence: {
      type: String,
      required: true,
    },
    addressProof: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
