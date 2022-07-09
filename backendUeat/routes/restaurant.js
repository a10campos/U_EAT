const express = require("express");
const {registRest, getRestaurants,getRestaurantById} = require("../controllers/restaurant");
const {userIsAutenticated} = require("../middlewares/auth");
const router = express.Router();

router.route("/registRest").post([userIsAutenticated],registRest);
router.route("/restaurants").get(getRestaurants);
router.route("/restaurants/:id").get(getRestaurantById);

module.exports = router;