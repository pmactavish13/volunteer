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
module.exports = function (app, passport) {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads home.handlebars
    app.get("/", function (req, res) {
        res.render(path.join(__dirname, "../views/home.handlebars"));
    });

    // new_member route loads new_members.handlebars
    app.get("/new_members", function (req, res) {
        res.render(path.join(__dirname, "../views/new_members.handlebars"));
    });

    // new_event route loads new_events.handlebars
    app.get("/new_events", isLoggedIn, function (req, res) {
        res.render(path.join(__dirname, "../views/new_events.handlebars"));
    });

    // event sign up route loads events_sign_up.handlebars - all jobs list
    app.get("/events_sign_up", isLoggedIn, function (req, res) {
        res.render(path.join(__dirname, "../views/events_sign_up.handlebars"));
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    });

    app.get('/login', function (req, res) {
        res.render(path.join(__dirname, "../views/login.handlebars"));
    });

    app.post('/new_members', passport.authenticate('local-signup', {
        successRedirect: '/events_sign_up',
        failureRedirect: '/new_members'
    }));

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/events_sign_up',
        failureRedirect: '/login'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }

};