"use strict";

const express = require("express");
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var restaurantController = require('./controllers/restaurantController'); // set movieController to the movieController class
var userController = require('./controllers/userController');

const bodyParser = require("body-parser");
var cors = require('cors')
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.route('/restaurant').get(restaurantController.getAllrestaurant); // activate the getAllrestaurant method if the route is GET(method) /restaurant
app.route('/restaurant/:search').get(restaurantController.searchBar);// activates the searchBar method if the route is GET(method)/searchBar
app.route('/restaurantid/:avgrating').post(restaurantController.averageRestaurantRating);// activates the searchBar method if the route is GET(method)/searchBar
app.route('/restaurantid/:avgrating').get(restaurantController.getOnerestaurant);
app.route('/comments').get(commentController.getAllComments); // activate the getAllComments method if the route is GET(method) /comments
app.route('/comments/:userid').post(commentController.addComment); // activate the addComment method if the route is POST(method) /comments
app.route('/comments/:userid/:commentid').put(commentController.updateComment); // activate the updateComments method if the route is PUT(method) /comments/::userid/:commentid
app.route('/comments/:userid/:commentid').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:userid/:commentid
app.route('/user/:id').put(userController.updateUser);// activate the updateUser method if the route is GET(method) /user
app.route('/login').post(userController.loginUser);// activate the loginUser ethod if the route is GET(method) /user/:login
app.route('/user').post(userController.addUser);// activate the addUser method if the route is GET(method) /user
app.route('/user').get(userController.getAllUsers);// activate the getALLUsers method if the route is GET(method) /user
app.route('/user/:id').delete(userController.deleteUser);// activate the deleteUser method if the route is GET(method) /user/:id
app.route('/userinfo').post(userController.userinfomation);// activate the userinfo method if the route is POST(method) /user/:id

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
