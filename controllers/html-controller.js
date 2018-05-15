// *********************************************************************************
// html-controller.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
//var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  // new_member route loads new_volunteer.html
  app.get("/new_member", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/new_member.html"));
  });

  // event sign up route loads opportunities.html - all jobs list
  app.get("/eventSignUp", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/eventSignUp.html"));
  });

};

