const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const Paymnetmodel = require("../src/models/Payment");

const Paymnet_Controller = async function (req, res) {
  try {
    const requestBody = req.body;
    if (!validator.isValidRequestBody(requestBody)) {
      res.status(400).send({
        status: false,
        message: "Invalid request parameters. Please provide user details",
      });
      return;
    }

    //Extract prams
    const { paymentId, expectedPrice, finalPrice, paymentMode } = requestBody;

    // Validation starts
    if (!validator.isValid(paymentId)) {
      res
        .status(400)
        .send({ status: false, message: "paymentId is required" });
      return;
    }

    if (!validator.isValid(expectedPrice)) {
      res
        .status(400)
        .send({ status: false, message: "expectedPrice of Vehicle is required" });
      return;
    }

    if (!validator.isValid(finalPrice)) {
      res
        .status(400)
        .send({ status: false, message: "finalPrice is required" });
      return;
    }

    if (!validator.isValid(paymentMode)) {
      res
        .status(400)
        .send({ status: false, message: "paymentMode  is required" });
      return;
    }


// Validation ends
const payment_info = {paymentId, expectedPrice, finalPrice, paymentMode };
const payment_data = await Paymnetmodel.create(payment_info);

res.status(201).send({ status: true, message: "Success", data: payment_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = Paymnet_Controller;
