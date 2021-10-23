const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const userModel = require("../src/models/Rating");

const Rating_Controller = async function (req, res) {
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
    const { ratingId, rating, totalRating,totalNumberOfRating } = requestBody;

    // Validation starts
    if (!validator.isValid(ratingId)) {
      res
        .status(400)
        .send({ status: false, message: "ratingId is required" });
      return;
    }

    if (!validator.isValid(rating)) {
      res
        .status(400)
        .send({ status: false, message: "Rating is required" });
      return;
    }

    if (!validator.isValid(totalRating)) {
      res
        .status(400)
        .send({ status: false, message: "totalRating  is required" });
      return;
    }
    if (!validator.isValid(totalNumberOfRating)) {
        res
          .status(400)
          .send({ status: false, message: "totalNumberOfRating  is required" });
        return;
      }
   

// Validation ends
const Rating_info = {ratingId, rating, totalRating,totalNumberOfRating};
const Rating_data = await userModel.create(Rating_info);

res.status(201).send({ status: true, message: "Success", data: Rating_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = Rating_Controller;
