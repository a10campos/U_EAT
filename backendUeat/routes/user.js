const express = require("express");
const {loginUser, registerUser} = require("../controllers/user");
const { userIsAutenticated } = require("../middlewares/auth");

const router = express.Router();
router.route("/Login").post(loginUser);
router.route("/registerUser").post(registerUser);

module.exports = router;