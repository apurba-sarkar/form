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
    console.log("----------------");
    console.log(req.body);

    const UserExist = await User2.findOne({
      fullname: fullname,
    });
    // console.log(typeof UserExist);

    if (UserExist) {
      console.log("userExist");
      return res.send({ msg: "email already exist" });
    }

    const userCreated = await User2.create({ fullname, age, pcds });

    res.status(200).send({
      msg: "reg succesfull!",
      token: await userCreated.generateToken(),
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "page not found" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User2.find(); // Retrieve all users
    res.status(200).json(users); // Send the users as JSON
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error fetching users" });
  }
};

module.exports = { home, list, getAllUsers };
