
function getuser() {
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        user_array = JSON.parse(request.responseText);
        //call the function so as to display all movies tiles for "Now Showing"
        console.log(user_array)

    };
    //This command starts the calling of the movies web api
    request.send();
}

function addnewuser() {
    var postuserdetail = new XMLHttpRequest();

    postuserdetail.open('POST', newUser_url, true);
    postuserdetail.setRequestHeader("content-Type", "application/json");
    postuserdetail.onload = function () {
        console.log("ok");
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var email = document.getElementById("Email").value; // Value from HTML input text
    var password = document.getElementById("Password").value; // Value from HTML input text
    var firstName = document.getElementById("First").value; // Value from HTML input text
    var lastName = document.getElementById("Last").value; // Value from HTML input text
    var Address = document.getElementById("Address").value; // Value from HTML input text
    // var gender = document.getElementById("gender").value; 
    //var mobileNo = document.getElementById("mobileNo").value; 
    var activated = 1;
    //gender:gender
    //mobileNo:mobileNo,
    var payload = { email: email, firstName: firstName, lastName: lastName, address: Address, activated: activated, password: password }// will store all the values

    postuserdetail.send(JSON.stringify(payload));
}


function login() {

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", login_url, true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {

        var token = JSON.parse(loginUser.responseText)
        console.log(token.result)
        if (token.result != "invalid") {
            $('#loginModal').modal('hide');
            $('#successModal').modal('show');
            document.getElementById("registerMenu").style.display = "none";
            document.getElementById("loginMenu").style.display = "none";
            document.getElementById("logoutMenu").style.display = "block";
            document.getElementById("editMenu").style.display = "block";
            document.getElementById("profile").style.display = "block";
            sessionStorage.setItem("token", token.result);
            document.getElementById("newComment").disabled = false;
            alert("welcome " + email)
            userinfo(token.result);


        } else {
            $('#failModal').modal('show');
        }
    }
    var email = document.getElementById("EmailLogin").value
    var password = document.getElementById("PasswordLogin").value
    var payload = { email: email, password: password }
    loginUser.send(JSON.stringify(payload));
}



function logOutMe() {

    document.getElementById("registerMenu").style.display = "block";
    document.getElementById("loginMenu").style.display = "block";
    document.getElementById("logoutMenu").style.display = "none";
    document.getElementById("editMenu").style.display = "none";
    $('#successModal').modal('show');
    $('#registerModal').modal('hide');
    sessionStorage.removeItem("token");
}
function userinfo(token) {
    var userinfo = new XMLHttpRequest();
    var tokennow = token
    userinfo.open("POST", userinfo_url, true);
    userinfo.setRequestHeader("Content-Type", "application/json");
    userinfo.onload = function () {
        info_array = JSON.parse(userinfo.responseText)
        console.log(info_array)
    }
    var payload = { token: tokennow }
    userinfo.send(JSON.stringify(payload));
}

function updateUser() {
    var newInfo = new XMLHttpRequest();
    var userId = info_array[0].userId;
    var update_url = user_url +"/"+ userId;
    newInfo.open('PUT', update_url, true);
    newInfo.setRequestHeader("content-Type", "application/json");
    newInfo.onload = function () {
        var token = sessionStorage.getItem("token");
        userinfo(token)

    }
    var email = document.getElementById("email123").value; // Value from HTML input text
    var firstName = document.getElementById("firstName123").value; // Value from HTML input text
    var lastName = document.getElementById("lastName123").value; // Value from HTML input text
    var address = document.getElementById("address123").value;
    var mobileNo = document.getElementById("mobileNo123").value; // Value from HTML input text
    var gender = document.getElementById("gender123").value;
    var picture = document.getElementById("target").src;
    
    var payload = { email: email, firstName: firstName, lastName: lastName, address: address,mobileNo:mobileNo, gender: gender, picture:picture}
    console.log(payload)
    newInfo.send(JSON.stringify(payload));
}
function getProfile() {

    //getProfile.onload=function(){
    profile_array = info_array[0]
    console.log(profile_array)
    email = profile_array.email
    firstName = profile_array.firstName
    lastName = profile_array.lastName
    address = profile_array.address
    mobileNo = profile_array.mobileNo
    gender = profile_array.gender
    activated = profile_array.activated
    picture = profile_array.picture

    document.getElementById("email123").value = email; // Value from HTML input text

    document.getElementById("firstName123").value = firstName
    document.getElementById("lastName123").value = lastName
    document.getElementById("address123").value = address
    document.getElementById("mobileNo123").value = mobileNo
    document.getElementById("gender123").value = gender
    
    
    document.getElementById("picture123").value = picture
}

function deleteUser() {
    var newInfo = new XMLHttpRequest();
    userId = userinfo[0].userId
    user_delete = user_url + "/" + userId
    newInfo.open('DELETE', user_delete, true);
    newInfo.setRequestHeader("content-Type", "application/json");
    newInfo.onload = function () {
        console.log("delete")
    }
    //const { get } = require("express/lib/response");
}

function encode() {
    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            picture = fileLoadedEvent.target.result;
            var newImage = document.getElementById('target');
            newImage.src = picture;
            var srcData = fileLoadedEvent.target.result;
        }
        fileReader.readAsDataURL(imageFile)
    }
}