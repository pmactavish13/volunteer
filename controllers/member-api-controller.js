module.exports = function (app, passport) {

    app.post('/api/new_members', passport.authenticate('local-signup', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/new_members'
    }));

    app.post('/api/login', passport.authenticate('local-signin', {
        successRedirect: '/opportunities_sign_up',
        failureRedirect: '/login'
    }));

};
