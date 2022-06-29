const express = require("express");
const {loginUser} = require("../controllers/user");
const { userIsAutenticated } = require("../middlewares/auth");

const router = express.Router();
router.route("/").get(userIsAutenticated);
router.route("/Login").post(loginUser);

module.exports = router;