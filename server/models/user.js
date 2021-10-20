const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true, // remove additional information
      required: "username is required",
    },
    email: {
      type: String,
      default: "",
      trim: true, // remove additional information
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true, // remove additional information
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

// configure options for User model
let options = { missingPasswordError: "Wrong/Missing password!" };
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model("User", User);
