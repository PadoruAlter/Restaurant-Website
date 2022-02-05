"use strict";
const RestaurantDB = require('../models/RestaurantDB');
const Restaurant = require('../models/Restaurant');


var restaurantDB = new RestaurantDB();

function getAllrestaurant(request, respond){
    restaurantDB.getAllrestaurant(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function cusineFilter(request, respond){
    var cusine = request.params.cusine;
    restaurantDB.cusineFilter(cusine, function(error, result){
    if(error){
        respond.json(error);
    }
    else{
        respond.json(result);
    }
    });
}
function searchBar(request, respond){
    var search = request.params.search;
    restaurantDB.searchBar(search, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
        });
}
function averageRestaurantRating(request,respond){
    var id = request.params.avgrating;
    var id2 = request.params.avgrating;
    restaurantDB.averageRestaurantRating(id,id2, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
        });
}
function getOnerestaurant(request, respond){
    var id = request.params.avgrating;
    restaurantDB.getOnerestaurant(id,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
module.exports = {getAllrestaurant, cusineFilter, searchBar, averageRestaurantRating, getOnerestaurant};