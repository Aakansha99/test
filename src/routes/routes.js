const express = require("express");
const path = require("path");
const router = express.Router();

const riderController = require("../controllers/riderController");
const driverController = require("../controllers/driverController");

const userAuth = require("../middlewares/userAuth");

// rider routes
router.post("/register", riderController.registerUser);
router.post("/login", riderController.loginUser);


// driver routes
router.post("/register", driverController.registerUser);
router.post("/login", driverController.loginUser);

module.exports = router;
