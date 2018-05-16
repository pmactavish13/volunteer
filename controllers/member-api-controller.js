var db = require("../models");

module.exports = function (app) {
// add new data - new member
app.post("/api/new_members", function (req, res) {
    db.Member.create(req.body).then(function (dbMember) {
        res.json(dbMember)
    });
});
}