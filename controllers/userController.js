"use strict";
const User = require('../Models/User');
const UserDB = require('../models/UserDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var secret = "secret"
var userDB = new UserDB();

function getAllUsers(request, respond) {
    userDB.getAllUsers(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addUser(request, respond) {
    var password = request.body.password;
    var password = bcrypt.hashSync(password, 10)
    var user = new User(null, request.body.email, request.body.firstName, request.body.lastName, request.body.address,
        request.body.mobileNo, request.body.gender, request.body.picture, request.body.activated, password);
    userDB.addUser(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function updateUser(request, respond) {

    var user = new User(parseInt(request.params.id), request.body.email, request.body.firstName, request.body.lastName, request.body.address,
        request.body.mobileNo, request.body.gender, request.body.picture, request.body.activated, request.body.password);
        userDB.updateUser(user, function (error, result){
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
        }
        
            
        

function deleteUser(request, respond) {
    var userId = request.params.id;
    userDB.deleteUser(userId, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}
function loginUser(request, respond) {
    var email = request.body.email
    var password = request.body.password
    userDB.loginUser(email, password, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {

            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash)
            if (flag) {
                var token = jwt.sign(email, secret)
                respond.json({ result: token });
            } else {
                respond.json({ result: "invalid" });
            }

        }
    });
}
function userinfomation(request, respond) {
    var token = request.body.token
    try {
        var decoder = jwt.verify(token, secret)
        userDB.userinfomation(decoder, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
    });
        } catch (error) {
            respond.json({ result: "invalid" });
        }
        
    }
module.exports = { getAllUsers, addUser, updateUser, deleteUser, loginUser, userinfomation };