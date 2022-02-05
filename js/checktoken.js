$(document).ready(function (){

    var token = sessionStorage.getItem("token");
    if (token != null){
        $('#register').hide
        $('#login').hide
        $('#logout').show
        $('#editMenu').show
        $('#newReview').show
        $('#editReview').show
        $('#deletreviewReview').show
    }
})