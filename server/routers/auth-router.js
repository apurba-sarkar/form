const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const authSchema = require("../validators/auth-validator");
const { home, list, getAllUsers,user } = require("../controllers/auth-controller");
const authmiddleware = require("../middlewares/auth-middleware")
const multer = require("multer")
const upload = multer({
    dest:'public'
})
router.route("/").get(home);
router.route("/list").get(getAllUsers);
router.route("/list",upload.single('photo')).post( list);
router.route("/user").get(authmiddleware,user)

module.exports = router;
