// Attach a click event listener to the See All Guidebooks button. Alert the user that this feature isn't done yet.
// Attach a click event listener to the See All Destinations button. Alert the user that this feature isn't done yet.

var allButtons = document.querySelectorAll('button'); // all buttons

var seeAllGuidebooks = allButtons[0]; // first button
seeAllGuidebooks.addEventListener('click', function() {alert("Feature is incomplete");});

var seeAllDestinations = allButtons[1]; // second button
seeAllDestinations.addEventListener('click', function() {alert("Feature is incomplete");});

// Attach a click event listener to each desitination square. Inside the callback function, use window.open to trigger a new window with a google map page of that destination.
// Example url (just copy the entire url from the address bar): https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en

var spans = document.querySelectorAll('span'); // get all spans - destination names

var newspans = []; // create an array of destination names in string format
spans.forEach(function(item) { newspans.push(item.innerText);});

var boxes = document.querySelectorAll('.box'); // get all destination squares
var queryurl = 'https://www.google.com/maps/search/?api=1&query='; // URL encoding
boxes.forEach(function (item, index) {
  item.addEventListener('click', function() {
    var destination = newspans[index];
    destination.replace(' ', '%20'); // properly encode space characters
    window.open(queryurl + destination);
  });
});

// Create a search input that will open a new window (as it does in the task above) when the user types in one of the destinations and clicks submit
var submit = allButtons[2]; // submit button

submit.addEventListener('click', function() {
  var input = document.getElementById('destination-search'); // input value
  if (newspans.includes(input.value)) {
    var destination = input.value.replace(' ', '%20'); // properly encode space characters
    window.open(queryurl + destination);
  }
});

// Using the change event on the input detect when the user has entered a valid destination name, and open the window (without the need to click the submit button);
// alert the user that they have not entered a valid destination name, and clear the input so that they can try again.
// Create a div and show the user a message that they have not entered a valid destination. Style the messgae in red, so the user knows it's serious.

document.getElementById('destination-search').addEventListener('change', function() {
  console.log(this.value);
  if (newspans.includes(this.value)) {
    var destination = this.value.replace(' ', '%20'); // properly encode space characters
    window.open(queryurl + destination);
  }
  else {
    var div = document.createElement('div'); // create a div
    div.innerText = "Invalid destination name";
    div.style.color = 'red';
    var outerdiv = document.querySelector('.searchbox');
    outerdiv.appendChild(div);
    alert("Invalid destination name");
    setTimeout(function() { // make message disappear after 5 seconds
      var remove = document.querySelector('.searchbox');
      remove.parentNode.removeChild(remove);
    }, 5000);
  }
})
