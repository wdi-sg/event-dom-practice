document.addEventListener("DOMContentLoaded", function() {
// add alert to Guidebooks button
	var guideButton = document.querySelector("#seeGuide");

	function clickGuideButton() {
		alert("This feature isn't done yet!");
	}

		for (i=0; i<2; i++) {
	    guideButton.addEventListener("click", clickGuideButton);
	    }
// add alert to Destinations button
	var destiButton = document.querySelector("#seeDesti");

	function clickDestiButton() {
		alert("This feature isn't done yet!");
	}

		for (i=0; i<2; i++) {
	    destiButton.addEventListener("click", clickDestiButton);
	    }
// add google maps to San Francisco button
	var sanFraButton = document.querySelector("#box1");

	function clickSanFraButton() {
		window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7573684,-122.7177835,10z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en");
	}

		for (i=0; i<2; i++) {
	    sanFraButton.addEventListener("click", clickSanFraButton);
	    }
// add google maps to New York button
	var newYorkButton = document.querySelector("#box2");

	function clickNewYorkButton() {
		window.open("https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6961331,-74.5401051,9z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en");
	}

		for (i=0; i<2; i++) {
	    newYorkButton.addEventListener("click", clickNewYorkButton);
	    }
// add google maps to London button
	var londonButton = document.querySelector("#box3");

	function clickLondonButton() {
		window.open("https://www.google.com.sg/maps/place/London,+UK/@51.5273068,-0.6619955,9z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en");
	}

		for (i=0; i<2; i++) {
	    londonButton.addEventListener("click", clickLondonButton);
	    }
// add google maps to Napa button
	var napaButton = document.querySelector("#box4");

	function clickNapaButton() {
		window.open("https://www.google.com.sg/maps/place/Napa,+CA,+USA/@38.2858793,-122.4300421,11z/data=!3m1!4b1!4m5!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865?hl=en");
	}

		for (i=0; i<2; i++) {
	    napaButton.addEventListener("click", clickNapaButton);
	    }
// add google maps to Sonoma button
	var sonomaButton = document.querySelector("#box5");

	function clickSonomaButton() {
		window.open("https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.2910725,-122.5191393,12z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en");
	}

		for (i=0; i<2; i++) {
	    sonomaButton.addEventListener("click", clickSonomaButton);
	    }
// add google maps to San Francisco II button
	var sanFraTwoButton = document.querySelector("#box6");

	function clickSanFraTwoButton() {
		window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7573684,-122.7177835,10z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en");
	}

		for (i=0; i<2; i++) {
	    sanFraTwoButton.addEventListener("click", clickSanFraTwoButton);
	    }


});