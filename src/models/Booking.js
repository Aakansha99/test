const mongoose = require("mongoose");

const { validator } = require("../utils");
const { systemConfig } = require("../configs");

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: Number,
      required: true,
      unique: true,
    },
    driverId: {
      type: ObjectId,
      required: "Driver Id is required",
      ref: "Driver",
    },
    riderId: {
      type: ObjectId,
      required: "Rider Id is required",
      ref: "Rider",
    },

    driverCurrentLocation: {
      type: String,
      required: true,
    },
    riderCurrentLocation: {
      type: String,
      required: true,
    },
    destinationLocationOfRider: {
      type: String,
      required: true,
    },
    riderLocationArrivedTime: {
      type: Date,
      required: true,
    },
    bookingTime: {
      type: Date,
      required: true,
    },
    startRideTime: {
      type: Date,
      required: true,
    },
    endRideTime: {
      type: Date,
      required: true,
    },
    waitingTime: {
      type: Date,
      required: true,
    },
    sharedRideLink: {
      type: String,
      required: true,
    },
    paymentId: {
      type: ObjectId,
      required: "Payment Id is required",
      ref: "Payment",
    },
    cancelled: {
      type: Boolean,
      requied: true,
    },
    driverFeedback: {
      type: ObjectId,
      ref: "DriverFeedback",
    },
    userFeedback: {
      type: ObjectId,
      ref: "UserFeedback",
    },
    offer: {
      type: ObjectId,
      ref: "Offer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
