const express = require("express");
const path = require("path");
const router = express.Router();

const riderController = require("../controllers/riderController");
const driverController = require("../controllers/driverController");
const addressController = require("../controllers/Address_controller");
const bookingController = require("../controllers/bokking_controller");
const cabController = require("../controllers/cab_controller");
const documentController = require("../controllers/document_controller");
const driverFeedbackController = require("../controllers/DriverFeedback_Controller");
const driverStatusController = require("../controllers/DriverStatus_Controller");
const offerController = require("../controllers/Offer_Controller");
const paymentController = require("../controllers/payment_controller");
const ratingsController = require("../controllers/Ratings_Controller");
const UserFeedbackController = require("../controllers/UserFeedback_Controller");
const VehicleController = require("../controllers/Vehicle_Controller");
const walletController = require("../controllers/wallet_controller");

const userAuth = require("../middlewares/userAuth");

// rider routes
router.post("/register", riderController.registerUser);
router.post("/login", riderController.loginUser);

// driver routes
router.post("/register", driverController.registerUser);
router.post("/login", driverController.loginUser);

//address routes
router.post("/address", addressController);

//booking routes
router.post("/booking", bookingController);

//cab routes
router.post("/cab", cabController);

//document routes
router.post("/document", documentController);

//driver_Feedback routes
router.post("/driverfeedback", driverFeedbackController);

//driver_Status routes
router.post("/driverstatus", driverStatusController);

//payment routes
router.post("/payment", paymentController);

//ratings routes
router.post("/rating", ratingsController);

//offer routes
router.post("/offer", offerController);

//user_Feedback routes
router.post("/userfeedback", UserFeedbackController);

//vehicle routes
router.post("/vehicle", VehicleController);

//wallet routes
router.post("/wallet", walletController);


module.exports = router;
