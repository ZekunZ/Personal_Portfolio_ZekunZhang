/* Zekun Zhang 301163111 Oct 3 2021
   index.js 
*/

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about me page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });
});

module.exports = router;
