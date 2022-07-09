const express = require("express");
const {registRest, getRestaurants,getRestaurantById,getReviewByRestaurant} = require("../controllers/restaurant");
const {userIsAutenticated} = require("../middlewares/auth");
const router = express.Router();

router.route("/registRest").post([userIsAutenticated],registRest);
router.route("/restaurants").get(getRestaurants);
router.route("/restaurants/:id").get(getRestaurantById);
router.route("/restaurants/:id/reviews").get(getReviewByRestaurant);

module.exports = router;