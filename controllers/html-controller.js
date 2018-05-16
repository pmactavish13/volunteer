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

  // index route loads home.handlebars
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.handlebars"));
  });

  // new_member route loads new_members.handlebars
  app.get("/new_members", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/new_members.handlebars"));
  });

    // new_event route loads new_events.handlebars
    app.get("/new_events", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/new_events.handlebars"));
    });

  // event sign up route loads events_sign_up.handlebars - all jobs list
  app.get("/events_sign_up", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/events_sign_up.handlebars"));
  });

};

