const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const VehicleModel = require("../src/models/VehicleModel");

const Vehicle_Controller = async function (req, res) {
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
    const { Vehical_Type, length, width, height,weight } = requestBody;

    // Validation starts
    if (!validator.isValid(Vehical_Type)) {
      res
        .status(400)
        .send({ status: false, message: "Vehical_Type is required" });
      return;
    }

    if (!validator.isValid(length)) {
      res
        .status(400)
        .send({ status: false, message: "length of car is required" });
      return;
    }

    if (!validator.isValid(width)) {
      res
        .status(400)
        .send({ status: false, message: "width is required" });
      return;
    }

    if (!validator.isValid(height)) {
      res
        .status(400)
        .send({ status: false, message: "height  is required" });
      return;
    }

    if (!validator.isValid(weight)) {
        res
          .status(400)
          .send({ status: false, message: "weight  is required" });
        return;
      }

// Validation ends
const Vehicle_proof = {Vehical_Type, length, width, height,weight };
const Vehcile_data = await VehicleModel.create(Vehicle_proof);

res.status(201).send({ status: true, message: "Success", data: Vehcile_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = Vehicle_Controller;
