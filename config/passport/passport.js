//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var db = require('../../models');

module.exports = function (passport, login) {

    var Login = login;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function (login, done) {
        done(null, login.id);
    });

    // used to deserialize the login
    passport.deserializeUser(function (id, done) {
        db.Member.findById(id).then(function (login) {
            if (login) {
                done(null, login.get());
            } else {
                done(login.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            db.Member.findOne({
                where: {
                    email: email
                }
            }).then(function (login) {
                if (login) {
                    return done(null, false, {
                        message: 'email address already in use. please try again'
                    });
                } else {
                    var hashPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: hashPassword,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        phone: req.body.phone,
                        photoUrl: req.body.photoUrl,
                        inOrOut: req.body.inOrOut,
                        cooking: req.body.cooking,
                        gardening: req.body.gardening,
                        painting: req.body.painting,
                        carpentry: req.body.carpentry,
                        plumbing: req.body.plumbing,
                        electrical: req.body.electrical,
                        publicRelations: req.body.publicRelations,
                        marketing: req.body.marketing,
                        fundRaising: req.body.fundRaising,
                        programming: req.body.programming,
                        sales: req.body.sales,
                        teaching: req.body.teaching,
                    };

                    db.Member.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            console.log("login route");

            var Member = member;
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            db.Member.findOne({
                where: {
                    email: email
                }
            }).then(function (login) {
                if (!login) {
                    return done(null, false, {
                        message: 'email/password combination incorrect. please try again.'
                    });
                }
                if (!isValidPassword(login.password, password)) {
                    return done(null, false, {
                        message: 'email/password combination incorrect. please try again.'
                    });
                }

                var userinfo = login.get();
                return done(null, userinfo);

            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'an error occured. please try again.'
                });
            });
        }
    ));
};