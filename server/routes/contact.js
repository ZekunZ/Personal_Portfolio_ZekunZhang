const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

const contactController = require("../controllers/contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

// GET Route for the Contact List page  - READ Operation
router.get("/", requireAuth, contactController.displayContactList);

// GET Route for displaying EDIT page  - UPDATE Operation
router.get("/edit/:id", requireAuth, contactController.displayEditPage);

// POST Route for processing EDIT page  - UPDATE Operation
router.post("/edit/:id", requireAuth, contactController.processEditPage);

// GET Route to perform deletion - DELETE Operation
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;
