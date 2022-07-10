const express = require("express");
const {sendReview} = require("../controllers/review");

const router = express.Router();

router.route("/sendReview").post(sendReview);

module.exports = router;