let boxes;
const destinations = ["San Francisco", "New York", "London", "Napa", "Sonoma"];
const notAvail = function(){
	alert("Comming soon!");
}

const openWindow = function(location){
	// console.log(this);
	window.open(`https://www.google.com/maps/place/${location}`);
}

const checkInput = function(location){
	for (j=0; j<destinations.length; j++) {
		console.log(destinations[j]);
		if (location === destinations[j]) {
			return destinations[j];
		}
	}
	return "";
}

document.addEventListener('DOMContentLoaded', function(){
	// not avail
	document.getElementById("button-guidebook").addEventListener("click", notAvail);
	document.getElementById("button-destination").addEventListener("click", notAvail);

	// open window
	boxes = document.getElementsByClassName("box");
	for (i=0; i<boxes.length; i++) {
		let innerWord = boxes[i].innerText;
		boxes[i].addEventListener("click", function(){
			console.log(innerWord);
			openWindow(checkInput(innerWord));
		});
	}

	// search
	document.getElementById("submit-destination").addEventListener("click", function(){
			let destination = document.getElementById("destination-search").value;
			openWindow(destination);
	});

});