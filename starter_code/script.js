let boxes;
// let before;
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
		// console.log(destinations[j]);
		if (location === destinations[j]) {
			return destinations[j];
		}
	}
	return "";
}

const injectAlert = function(){
	const newAlert = document.createElement("div");
	newAlert.textContent = "Invalid Input!";
	newAlert.style.color = "red";
	let parent = document.getElementsByClassName("search")[0];
	let before = document.getElementById("destination-search");
	parent.insertBefore(newAlert, before);

	// removes div after 3 seconds
	setTimeout(function(){ parent.removeChild(newAlert); }, 3000);

	
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

	// change
	document.getElementById('destination-search').addEventListener("change",
		function(){
			// console.log(this.value);
			if (checkInput(this.value) !== ""){
				openWindow(this.value);
			} else {
				alert("invalid input");
				this.value = "";
				injectAlert();
			}
		})
});