//q1, q2
var buttonList = document.querySelectorAll('.button-not-done');
buttonList.forEach(function(element) {
  element.addEventListener("click", function() {
    alert("This feature isn't completed yet!");
  })
})

//search for place on google maps
function searchGoogleMap(place) {
  var escapedPlace = encodeURI(place);
  var url = "https://www.google.com/maps/search/?api=1&query=" + escapedPlace;
  return url;
}

//q3
var boxList = document.querySelectorAll(".box");
boxList.forEach(function(element) {
  var country = element.innerText;
  var url = searchGoogleMap(country);
  element.addEventListener("click", function() {
    window.open(url);
  })
})


//valid destinations array
var validDestinations = [];
boxList.forEach(function(element) {
  validDestinations.push(element.innerText);
})

//q4
var searchBoxElement = document.getElementById("destination-search");
var searchBoxSubmitElement = document.getElementById("submit-destination");
searchBoxSubmitElement.addEventListener("click", function() {
  var userInput = searchBoxElement.value;
  if (validDestinations.includes(userInput)) {
    var url = searchGoogleMap(userInput);
    window.open(url);
  } else {
    errorMessageElement.style.visibility = "visible";
  }
  searchBoxElement.value = "";
})

//q5, q6, q7
var errorMessageElement = document.getElementById("error-message");
searchBoxElement.addEventListener("change", function() {
  errorMessageElement.style.visibility = "hidden";
  var userInput = searchBoxElement.value;
  if (validDestinations.includes(userInput)) {
    var url = searchGoogleMap(userInput);
    window.open(url);
  } else {
    // alert("Please enter a valid destination!");
    errorMessageElement.style.visibility = "visible";
  }
  searchBoxElement.value = "";
})

