var db = require("../models");

module.exports = function (app, passport) {

    app.post('/api/member', passport.authenticate('local-signup', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/new_members'
    }));

    app.post('/api/login', passport.authenticate('local-signin', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/login'
    }));

    app.get("/api/member", isLoggedIn, function (req, res) {
        db.Member.findAll({
            include: [db.Opportunity]
        }).then(function (members) {
            res.json(members);
        });
    });

    app.get("/api/member/:id", isLoggedIn, function (req, res) {
        db.Member.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Opportunity]
        }).then(function (member) {
            res.json(member);
        });
    });

    app.put("/api/member/:id", isLoggedIn, function (req, res) {
        db.Member.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.delete("/api/authors/:id", isLoggedIn, function (req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
};


