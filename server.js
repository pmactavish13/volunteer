var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 5000;
var db = require("./models");

// handlebars rout to static files - css, img
app.use(express.static('public'));

// bodyParser to translate urlform and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/html-controller.js")(app);
// require("./controllers/volunteer-api-controller.js")(app);
// require("./controllers/organization-api-controller.js")(app);

// Use to clear databases during development { force: true }

// Initiate database interface and start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });
});