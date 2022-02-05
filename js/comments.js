function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array)
    };
    request.send();
}

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";


}
// Submit or send the new comment to the server to be added.
function addComment() {
    var restaurantId = restaurant_array[currentIndex].restaurantId; // restaurant ID is required by server to create new comment 
    review = new Object;
    review.review = document.getElementById("userComments").value; // Value from HTML input text
    //var date =  null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = rating;
    review.restaurantId = restaurantId
    console.log(info_array[0])
    var userId = info_array[0].userId
    true_comment_url = comment_url + "/" + userId;

    console.log(true_comment_url)
    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", true_comment_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        fetchComments(); // fetch all comments again so that the web page can have updated comments.   
        
    };

    
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(review));
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editComment(element) {
    var item = element.getAttribute("item");
    var userId = info_array[0].userId
    if (comment_array[item].userId == userId) {
        currentIndex = item;

        document.getElementById("edituserComments").value = comment_array[item].review;
        console.log(comment_array[item].rating);
        displayColorPopcorn('editpop', comment_array[item].rating);

    } else {
        alert("Not your comment!")
    }
}
//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {

    var userId = info_array[0].userId
    var commentId = comment_array[currentIndex].commentId
    if (comment_array[currentIndex].userId == userId) {
        var response = confirm("Are you sure you want to update this comment?");
        console.log(commentId)
        console.log(userId)
        if (response == true) {
            var commentModal = document.getElementById("editCommentModal");
            var edit_comment_url = comment_url + "/" + userId +"/"+ commentId;
            var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
            //commentModal.hide();
            updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
            updateComment.setRequestHeader("Content-Type", "application/json");
            
            comment_array[currentIndex].review = document.getElementById("edituserComments").value;
            comment_array[currentIndex].rating = rating;
            updateComment.onload = function () {
                fetchComments();

            };
            updateComment.send(JSON.stringify(comment_array[currentIndex]));
        }
    } else {
        alert("STILL NOT YOUR COMMENT!!!")
    }
}

//This function deletes the selected comment in a specific movie
function deleteComment(element) {

    var item = element.getAttribute("item");
    var userId = info_array[0].userId
    
    var commentId = comment_array[item].commentId
    if (comment_array[item].userId == userId) {
        
        var response = confirm("Are you sure you want to delete this comment?");
        if (response == true) {
            var item = element.getAttribute("item"); //get the current item

            var delete_comment_url = comment_url + "/" + userId +"/"+ commentId;
            console.log(delete_comment_url)
            var eraseComment = new XMLHttpRequest();
            eraseComment.open("DELETE", delete_comment_url, true);
            eraseComment.onload = function () {
                fetchComments();
            };

            eraseComment.send();
        }
    } else {
        alert("Not your comment!")
    }
}


//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showrestaurantComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("commentBody").textContent = "";
    count = 0
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].restaurantId == restaurant_array[item].restaurantId) {
            count += 1

            document.getElementById("emptyComment").innerHTML = "";
            selectedrestaurantId = restaurant_array[item].restaurantId;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>by " + user_array[comment_array[i].userId-1].firstName + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            //console.log(user_array[i])
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {

                star += "<img src='images/cookiecolour.png' style='width:50px' />";
            }
            star += "<img src='images/delete.png' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' />";
            star += " <img src='images/edit.png' class='edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='"
                + i + "' onClick='editComment(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
    document.getElementById("review").textContent = count + " Review for " + restaurant_array[item].restaurantName;
}
