function getallrestaurant() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    
    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the movies records into our movie array
    restaurant_array = JSON.parse(request.responseText);
    //call the function so as to display all cusines for none
    getuser();// function to get all users

    fetchComments();
    console.log(restaurant_array)
    displayRestaurant(category);
    };
    //This command starts the calling of the restaurant web api
    request.send();
}
//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon“
function displayRestaurant(category) 
{    
    var table = document.getElementById("restaurantTable");    
    var restaurantCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalrestaurants = restaurant_array.length;    
    for (var count = 0; count < totalrestaurants; count++) 
    {    
        averagerating(count+1)
        if (category == "all"){
            var thumbnail = restaurant_array[count].restaurantPicture;            
            var title = restaurant_array[count].restaurantName;
            var cell = '<div class="col-md-3" style="float: none; margin: 0 auto;">' +                          
                             '<div class="flip-container" >' +              
                                 '<div class="flipper">' +
                                      '<div class="front">' + 
                                          '<a id="restaurant" href="#" data-toggle="modal" data-target="#restaurantModal" item=' + count + '>'+
                                              '<img src=' + thumbnail + ' />'+
                                          '</a>'+
                                      '</div>'+                              
                                      '<div class="back">'+                                   
                                          '<div class="bg-dark mystyle text-center" >'+
                                              '<span><br>' + title + '</span><br>' +
                                              '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showrestaurantDetails(this)" >See More</button> '+                     
                                              '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showrestaurantComments(this)" >Comments</button>'+
                                          '</div>'+
                                      '</div>'+
                                  '</div>' +
                              '</div>' +
                          '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }else{
        if (restaurant_array[count].restaurantCusine == category) 
        {            
            var thumbnail = restaurant_array[count].restaurantPicture;            
            var title = restaurant_array[count].restaurantName;         
        
            var cell = '<div class="col-md-3" style="float: none; margin: 0 auto;">' +                          
                             '<div class="flip-container" >' +              
                                 '<div class="flipper">' +
                                      '<div class="front">' + 
                                          '<a id="restaurant" href="#" data-toggle="modal" data-target="#restaurantModal" item=' + count + '>'+
                                              '<img src=' + thumbnail + ' />'+
                                          '</a>'+
                                      '</div>'+                              
                                      '<div class="back">'+                                   
                                          '<div class="bg-dark mystyle text-center" >'+
                                              '<span><br>' + title + '</span><br>' +
                                              '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showrestaurantDetails(this)" >See More</button> '+                     
                                              '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showrestaurantComments(this)" >Comments</button>'+
                                          '</div>'+
                                      '</div>'+
                                  '</div>' +
                              '</div>' +
                          '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }}
    }    
    message = restaurantCount + " restaurants " + category;    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
}
//This function is to display the "Now Showing" movies
function listall() {
    category = "all";
    getallrestaurant(category);
}
 function listChinese() {
     category = "Chinese";
     getallrestaurant(category);
     
 }

//This function is to display the "Western" movies
 function listWestern() {
     category = "Western";
     getallrestaurant(category);
 }
 function listIndian() {
    category = "Indian";
    getallrestaurant(category);

}
function listItalian() {
    category = "Italian";
    getallrestaurant(category);
}
function listJapanese() {
    category = "Japanese";
    getallrestaurant(category);

}
function listKorean() {
    category = "Korean";
    getallrestaurant(category);
}

 //This function is to display the individual movies details
 //whenever the user clicks on "See More"
 function showrestaurantDetails(element) {
     var item = element.getAttribute("item");
     averagerating(item+1)
     
     currentIndex = item;
     document.getElementById("RestaurantName").textContent = restaurant_array[item].restaurantName;
     document.getElementById("restaurantPicture").src = restaurant_array[item].restaurantPicture;
     document.getElementById("Cusine").textContent = restaurant_array[item].restaurantCusine;
     document.getElementById("Description").textContent = restaurant_array[item].restaurantDescription;
     document.getElementById("Location").textContent = restaurant_array[item].restaurantLocation;
     document.getElementById("Website").textContent = restaurant_array[item].restaurantWebsite;
     document.getElementById("Rating").textContent = restaurant_array[item].restaurantRating;
     //console.log(showrestaurantDetails)
 }

 function search(){
    var searchvalue = document.getElementById("Search").value;
    var truesearch = search_url + searchvalue
    var search = new XMLHttpRequest();
    search.open('GET', truesearch, true);
    search.onload=function (){
        search_array = JSON.parse(search.responseText)
        console.log(search_array);
        restaurant_array = search_array
        displayRestaurant(category)
    };
    console.log(search);
    search.send();
 }
 function averagerating(index){ 
    var average = new XMLHttpRequest();
    index = index
    console.log("working on it")
    restaurantavg_url = restaurant_rating + index
    average.open('POST', restaurantavg_url, true);
    average.onload=function (){
    };
    
    average.send();
 }
 
 