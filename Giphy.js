const API_KEY = "olM7okw0s2nREg8d69ngilt1lofub5oW"

const URL = "https://api.giphy.com/v1"

const TRENDING_END_POINT = "/gifs/trending?api_key=olM7okw0s2nREg8d69ngilt1lofub5oW&limit=10&rating=G"

function getGif() {
  // we create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  //we get the text that the user has typed in
  //searchTerm = document.getElementById('input-box').value;
  // we set up the url endpoint we want to reach
  //var searchQuery = "&tag=" + searchTerm;
  var requestUrl = URL + TRENDING_END_POINT + API_KEY //+ searchQuery
  
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  //we do something with the successful response
  request.onload = function() {
    var response = request.response;
    var imageUrl  = response.data.image_url;
    document.getElementById('gif').src = imageUrl
  }
}