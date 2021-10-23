const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const userModel = require("../models/cabModel");

const cab_controller = async function (req, res) {
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
    const { cabId, licence_plate, car_model_id, no_of_passengers,manufacture_year,owner_id,brand,base_rate } = requestBody;

    // Validation starts
    if (!validator.isValid(cabId)) {
      res
        .status(400)
        .send({ status: false, message: "Cab Number is required" });
      return;
    }

    if (!validator.isValid(licence_plate)) {
      res
        .status(400)
        .send({ status: false, message: "licence_plate Number is required" });
      return;
    }

    if (!validator.isValid(car_model_id)) {
      res
        .status(400)
        .send({ status: false, message: "car_model_id Number is required" });
      return;
    }

    if (!validator.isValid(no_of_passengers)) {
      res
        .status(400)
        .send({ status: false, message: "no_of_passengers  is Necessary" });
      return;
    }


    if (!validator.isValid(manufacture_year)) {
        res
          .status(400)
          .send({ status: false, message: "manufacture_year  is required" });
        return;
      }

    
      if (!validator.isValid(owner_id)) {
        res
          .status(400)
          .send({ status: false, message: "owner_id  is required" });
        return;
      }

     
    if (!validator.isValid(brand)) {
        res
          .status(400)
          .send({ status: false, message: "brand information  is Necessary" });
        return;
      } 

    if (!validator.isValid(base_rate)) {
        res
          .status(400)
          .send({ status: false, message: "base_rate  is Necessary" });
        return;
    }  

// Validation ends
const cab_model = {cabId, licence_plate, car_model_id, no_of_passengers,manufacture_year,owner_id,brand,base_rate };
const cab_data = await userModel.create(cab_model);

res.status(201).send({ status: true, message: "Success", data: cab_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = cab_controller;
