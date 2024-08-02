const User2 = require("../models/user-model");

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
    const { fullname, age, pcds } = req.body;
    console.log("----------------")
    console.log(req.body);
    
    const UserExist = await User2.findOne({
      fullname: fullname,
    });
    // console.log(typeof UserExist);

    if (UserExist) {
      console.log("userExist");
      return res.send({ msg: "email already exist" });
    }

    await User2.create({ fullname, age, pcds });

    res.status(200).send("from mvc list");
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, list };
