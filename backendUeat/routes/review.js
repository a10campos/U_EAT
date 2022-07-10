const express = require("express");
const {sendReview} = require("../controllers/review");
const { userIsAutenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/sendReview").post([userIsAutenticated],sendReview);

module.exports = router;