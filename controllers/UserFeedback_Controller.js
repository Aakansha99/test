const validator = require("../utils/validator");
const systemConfig = require("../configs/system");
const userModel = require("../src/models/UserFeedback");

const UserFeedback_Controller = async function (req, res) {
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
    const { listOfCheckBox, Rating, feedBack } = requestBody;

    // Validation starts
    if (!validator.isValid(listOfCheckBox)) {
      res
        .status(400)
        .send({ status: false, message: "listOfCheckBox is required" });
      return;
    }

    if (!validator.isValid(Rating)) {
      res
        .status(400)
        .send({ status: false, message: "Rating is required" });
      return;
    }

    if (!validator.isValid(feedBack)) {
      res
        .status(400)
        .send({ status: false, message: "feedBack  is required" });
      return;
    }

   

// Validation ends
const UserFeedback_info = {listOfCheckBox, Rating, feedBack};
const UserFeedback_data = await userModel.create(UserFeedback_info);

res.status(201).send({ status: true, message: "Success", data: UserFeedback_data });

  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = UserFeedback_Controller;
