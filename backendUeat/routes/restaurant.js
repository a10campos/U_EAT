const express = require("express");
const {registRest} = require("../controllers/restaurant");
const {userIsAutenticated} = require("../middlewares/auth");
const router = express.Router();

router.route("/registRest").post([userIsAutenticated],registRest);

module.exports = router;