const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    // require: true,
  },
  pcds: {
    type: String,
    // require: true,
  },
  photo: {
    type:String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("pcds")) {
    next();
  }
  try {
    const saltRound = 10;
    const hashed_pincode = await bcrypt.hash(user.pcds, saltRound);
    user.pcds = hashed_pincode;
    console.log(user.pcds);
    console.log(this);
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      { userId: this._id.toString(), pcds: this.pcds, fullname: this.fullname },
      "ricky17sarkar",
      {
        expiresIn: "30d",
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const User2 = new mongoose.model("User2", userSchema);

module.exports = User2;
