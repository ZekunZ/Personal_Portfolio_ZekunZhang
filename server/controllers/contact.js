const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

// Create a reference to the model
const Contact = require("../models/contact");

module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact/list", {
        title: "Contact List",
        ContactList: contactList,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show edit view
      res.render("contact/edit", {
        title: "Edit Contact",
        contact: contactToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updateContact = Contact({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    moreinfo: req.body.moreinfo,
  });

  Contact.updateOne({ _id: id }, updateContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};
