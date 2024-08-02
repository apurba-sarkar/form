const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const authSchema = require("../validators/auth-validator");
const { home, list, getAllUsers } = require("../controllers/auth-controller");

router.route("/").get(home);
router.route("/list").get(getAllUsers);
router.route("/list").post(validate(authSchema), list);

module.exports = router;
