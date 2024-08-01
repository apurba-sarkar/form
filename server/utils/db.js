require("dotenv").config();
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://apurbasarkar453:ricky17sarkar@sam.jzhcpmd.mongodb.net/from?retryWrites=true&w=majority&appName=sam";
console.log(URI);

// mongoose.connect

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connection succesfull");
  } catch (err) {
    console.log("database connection failed", err);
    process.exit(0);
  }
};

module.exports = connectdb;
