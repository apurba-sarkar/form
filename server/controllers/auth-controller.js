const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("from mvc");
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "page not found" });
  }
};

const list = async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, age, pincode } = req.body;

    const UserExist =await User.findOne({
      fullname: fullname
    });
    // console.log(typeof UserExist);
    if (UserExist) {
      console.log("userExist")
      return res.send({ msg: "email already exist" });
    }
    await User.create({ fullname, age, pincode });

    res.status(200).send("from mvc list");
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, list };
