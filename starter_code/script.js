// The buttons (except the input one)have one type of action associated with them (alert the user that the feature isn't done yet)
// and the destination squares (all have class 'box') have another type of action associated with them. So we
// will need 2 callbacks. There is one function that is used slightly differently in 2 scenarios. The Google
// Maps Search function needs to be done either through clicking on the box, where the destination can be
// obtained from the box's innerHTML (you can also use the box's id to do this), or through typing into the
// input box, where the destination will be obtained from the input value. Hence, I'm going to write a function
// that will accept the destination as the input and then take over the processing from there, and it will be the
// job of the callbacks in the event listeners to pass the correct destination into this search function.
// Furthermore, this function is going to return either true or false depending on whether the input was valid.
// It's not needed now, but in an earlier idea, I was going to use this true/false result to determine whether
// to output an error, but I realized I could simply do the error output in the default case since that's the
// only time it will ever need to do that.

function googleMapsSearch (destination) {
    // Clear the output first in case the user HAS entered a valid search.
    document.getElementById('output').innerHTML = "";
    switch (destination) {
        case 'san francisco':
            window.open(encodeURI("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7578149,-122.5078114,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en"));
            return true;
            break;
        case 'new york':
            window.open(encodeURI("https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6976684,-74.2605487,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"));
            return true;
            break;
        case 'london':
            window.open(encodeURI("https://www.google.com.sg/maps/place/London,+UK/@51.5287714,-0.2420239,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en"));
            return true;
            break;
        case 'napa':
            window.open(encodeURI("https://www.google.com.sg/maps/place/Napa+Valley,+CA,+USA/@38.430005,-122.5612578,11z/data=!3m1!4b1!4m5!3m4!1s0x808454f53baeb1ad:0x863a3784a09da6e3!8m2!3d38.4274315!4d-122.3943299?hl=en"));
            return true;
            break;
        case 'sonoma':
            window.open(encodeURI("https://www.google.com.sg/maps/place/Sonoma+County,+CA,+USA/@38.4628221,-123.5517732,9z/data=!3m1!4b1!4m5!3m4!1s0x8084225d7dadb68f:0x494913200527a6fe!8m2!3d38.5779555!4d-122.9888319?hl=en"));
            return true;
            break;
        default:
            console.error('Unknown destination!');
            document.getElementById('output').innerHTML = 'Please enter a valid destination!';
            return false;
            break;
    };
};

// I thought of writing the alert as the callback function inside the addEventListener function, but the
// browser simply calls the alert rightaway!!! D:
function error() {
    alert("This feature isn't done yet.")
}

function setUpEventListeners () {
    
    // We want to get arrays of the buttons, and the boxes, so that we can pass the same callback to these 2
    // types of elements. But we don't want to say that the submit-destination feature is incomplete :x
    document.querySelectorAll('button').forEach(
        function (element) {
            if (element.getAttribute('id') !== 'submit-destination') {
                element.addEventListener('click', error)
            }
        }
    );

    document.querySelectorAll('.box').forEach(
        function (element) {
            element.addEventListener('click', function (event) {
                googleMapsSearch(event.target.innerHTML.toLowerCase());
            });
        }
    );

    document.getElementById('submit-destination').addEventListener('click', function () {
        var inputElement = document.getElementById('destination-search')
        googleMapsSearch(inputElement.value.toLowerCase()) ;
        inputElement.value = '';
    })

    document.getElementById('destination-search').addEventListener('change', function () {
        googleMapsSearch(this.value.toLowerCase());
    })
};

document.addEventListener('DOMContentLoaded', setUpEventListeners);
