"use strict";

var db = require('../db-connection');

class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from my_database.comments";
        db.query(sql, callback);
    }

    addComment(comment, callback){//add comments, requires userId to execute
        var sql = "INSERT INTO my_database.comments ( restaurantId, userId, review, rating, datePosted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [comment.getrestaurantId(),comment.getuserId(), comment.getreview(), comment.getrating(), comment.getdatePosted()], callback);
    }
    updateComment(comment, callback){//update the comments, requires userId to execute
        var sql = "UPDATE my_database.comments SET review = ?, rating = ? WHERE commentid = ? AND userid = ?";

        return db.query(sql, [comment.getreview(), comment.getrating(), comment.getcommentId(), comment.getuserId()], callback);
    }
    deleteComment(commentId, userId ,callback){ //delete the comments, requires userId to execute
        var sql = "DELETE from my_database.comments WHERE commentId = ? AND userId = ?";
        return db.query(sql, [commentId, userId], callback);
    }
}

module.exports = CommentsDB;


