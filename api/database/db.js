const mongoose = require("mongoose");

const db = async () => {
  await mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/usersdb", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = db;
