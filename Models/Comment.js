"use strict";

class Comment {
    constructor(commentid, restaurantId, userId, review, rating, datePosted) {
        this.commentid = commentid;
        this.restaurantId = restaurantId;
        this.userId = userId;
        this.review = review;
        this.rating = rating;
        this.datePosted = datePosted;
    }

    getcommentId() {
        return this.commentid;
    }

    getrestaurantId() {
        return this.restaurantId;
    }

    getuserId() {
        return this.userId;
    }

    getreview() {
        return this.review;
    }

    getrating() {
        return this.rating;
    }

    getdatePosted() {
        return this.datePosted;
    }

    setCommentId(commentId) {
         this.commentId = commentId;
    }

    setRestaurantId(restaurantId) {
         this.restaurantId = restaurantId;
    }

    setUserId(userId) {
         this.userId = userId;
    }

    setReview(review) {
         this.review = review;
    }


    setRating(rating) {
         this.rating = rating;
    }

    setDatePosted(datePosted) {
         this.datePosted = datePosted;
    }
}

module.exports = Comment;