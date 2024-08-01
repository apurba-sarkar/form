const express = require("express");
const router = express.Router();
const {home,list} = require("../controllers/auth-controller")

router.route("/").get(home)
router.route("/list").get(list)
router.route("/list").post(list)

module.exports = router;
