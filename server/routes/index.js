/* Zekun Zhang 301163111 Oct 3 2021
   index.js 
*/

const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET about me page. */
router.get("/about", indexController.displayAbooutPage);

/* GET projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET services page. */
router.get("/services", indexController.displayServicePage);

/* GET contact page. */
router.get("/contact", indexController.displayContactPage);

// POST Route for processing ADD page  - CREATE Operation
router.post("/contact", indexController.processAddPage);

/* GET Route for displaying Login page*/
router.get("/login", indexController.displayLoginPage);

/* POST Route for displaying Login page*/
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying Register page*/
router.get("/register", indexController.displayRegisterPage);

/* POST Route for displaying Register page*/
router.post("/register", indexController.processRegisterPage);

/* GET to perform userLogout*/
router.get("/logout", indexController.performLogout);

module.exports = router;
