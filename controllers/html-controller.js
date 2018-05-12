// *********************************************************************************
// html-controller.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  // opportunities route loads opportunities.html - all jobs list
  app.get("/opportunities", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/opportunities.html"));
  });

  // volunteer route loads volunteer.html - sign-up for job sheet
  app.get("/volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/volunteer.html"));
  });

  // new_volunteer route loads new_volunteer.html
  app.get("/new_volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/new_volunteer.html"));
  });

  // new_organization route loads new_organization.html
  app.get("/new_organization", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/new_organization.html"));
  });

  // organization route loads organization.html - new job sheet
  app.get("/organization", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/organization.html"));
  });

};

