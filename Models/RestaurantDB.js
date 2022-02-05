"use strict"
var db = require('../db-connection');

class RestaurantDB{
    getAllrestaurant(callback){
        var sql = "SELECT * FROM my_database.restaurant";
        db.query(sql, callback);
    }
    getOnerestaurant(restaurantId,callback){
        var sql = "SELECT * FROM my_database.restaurant WHERE restaurantId = ?";
        db.query(sql,[restaurantId], callback);
    }
    averageRestaurantRating(restaurantId,restaurantId2,callback){ // will be used to calculate the average of the restaurant ratings
        var sql = "UPDATE restaurant SET restaurantrating =(SELECT AVG(comments.rating) FROM my_database.comments WHERE restaurantId = ?) WHERE restaurantId = ?"
        db.query(sql,[restaurantId,restaurantId2], callback);
    }

    cusineFilter(cusine, callback){ //Takes the cusine and return all restaurant with that cusine
        var sql = "SELECT * FROM my_database.restaurant WHERE restaurantCusine = ?"
        db.query(sql, [cusine],callback);
    }

    searchBar(search,callback){ //search bar uses like and % to compare and take any results that may match the name of the restaurant in the Database and return it
        var sql = "SELECT * FROM my_database.restaurant WHERE restaurantName LIKE '%"+ search +"%'"
        db.query(sql,[search], callback)
    }
}

module.exports = RestaurantDB;


