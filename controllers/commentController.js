"use strict";
const CommentsDB = require('../models/CommentsDB');
const Comment = require('../models/Comment');

var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    commentsDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null, request.body.restaurantId, parseInt(request.params.userid), request.body.review, request.body.rating, now.toString());
    commentsDB.addComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment( parseInt(request.params.commentid), null, parseInt(request.params.userid), request.body.review, request.body.rating, now.toString().trim);
    commentsDB.updateComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentId = request.params.commentid;
    var userId = request.params.userid;
    commentsDB.deleteComment(commentId,userId ,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllComments, addComment, updateComment, deleteComment};

