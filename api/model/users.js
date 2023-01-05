const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },

  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
