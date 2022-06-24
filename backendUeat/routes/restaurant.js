const express = require("express");
const {registRest} = require("../controllers/restaurant");
const router = express.Router();

router.route("/registRest").post(registRest);

module.exports = router;