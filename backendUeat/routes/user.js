const express = require("express");
const {loginUser} = require("../controllers/user");
const router = express.Router();

router.route("/Login").post(loginUser);

module.exports = router;