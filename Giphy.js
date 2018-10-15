const API_KEY = "olM7okw0s2nREg8d69ngilt1lofub5oW"

const URL = "https://api.giphy.com/v1"

const TRENDING_END_POINT = "/gifs/trending"
const LIMIT = 10
const QUERY_PARAMS = "?api_key=" + API_KEY + "&limit=" + LIMIT + "&rating=G"

function getGif() {
 // we create a new instance of an HTTP request
 var request = new XMLHttpRequest();
 //we get the text that the user has typed in
 //searchTerm = document.getElementById('input-box').value;
 // we set up the url endpoint we want to reach
 //var searchQuery = "&tag=" + searchTerm;
 var requestUrl = URL + TRENDING_END_POINT + QUERY_PARAMS //+ searchQuery

 // we make the request
 request.open('GET', requestUrl);
 request.responseType = 'json';
 request.send();

 //we do something with the successful response
 request.onload = function() {
   var response = request.response;
   //var imageUrl  = response.data.image_url;
   var gifContainer = document.getElementById('gif')
   for (var i = 0; i < LIMIT; i++) {
     var imageUrl = response.data[i].images.fixed_height_small.url
     var newGifElement = document.createElement('img');
     newGifElement.src = imageUrl;
     gifContainer.append(newGifElement);
   }

 }
}