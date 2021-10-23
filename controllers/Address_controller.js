const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const userModel = require("../src/models/Address");

const Address_Controller = async function (req, res) {
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
    const { street, pincode, roadNo } = requestBody;

    // Validation starts
    if (!validator.isValid(street)) {
      res
        .status(400)
        .send({ status: false, message: "street is required" });
      return;
    }

    if (!validator.isValid(pincode)) {
      res
        .status(400)
        .send({ status: false, message: "pincode is required" });
      return;
    }

    if (!validator.isValid(roadNo)) {
      res
        .status(400)
        .send({ status: false, message: "roadNo Number is required" });
      return;
    }

   

// Validation ends
const address_info = {street, pincode, roadNo};
const address_data = await userModel.create(address_info);

res.status(201).send({ status: true, message: "Success", data: address_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = Address_Controller;
