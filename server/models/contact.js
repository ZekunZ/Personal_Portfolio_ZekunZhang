const mongoose = require("mongoose");

// create a model class
const contactModel = mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    moreinfo: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", contactModel);
