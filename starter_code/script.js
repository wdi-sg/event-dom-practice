
// Initialize country list
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


// Alert user that guidebook button feature is not ready yet
function alert_user_for_guidebook(){
  alert("Apologies mate!, See All Guidebooks feature is not ready yet.");
}
document.getElementById('guidebook_bt').addEventListener('click', alert_user_for_guidebook);

// Alert user that destination button feature is not ready yet
function alert_user_for_destination(){
  alert("Apologies mate!, See All Destinations feature is not ready yet.");
}
document.getElementById('destination_bt').addEventListener('click', alert_user_for_destination);

// Add click event listeners to open a new window which user clicks on the destinations square
// San Francisco
function open_destination_box1(){
  window.open("https://goo.gl/maps/KZo1cFe1V1D2");
}
document.getElementById('box1').addEventListener('click', open_destination_box1);

// New york
function open_destination_box2(){
  window.open("https://goo.gl/maps/PJAjUw2Cwo72");
}
document.getElementById('box2').addEventListener('click', open_destination_box2);

// London
function open_destination_box3(){
  window.open("https://goo.gl/maps/HWRdNBVzZuQ2");
}
document.getElementById('box3').addEventListener('click', open_destination_box3);

// Napa
function open_destination_box4(){
  window.open("https://goo.gl/maps/vPdsVWgiQ7S2");
}
document.getElementById('box4').addEventListener('click', open_destination_box4);

// Sonoma
function open_destination_box5(){
  window.open("https://goo.gl/maps/2EepCJ3WctH2");
}
document.getElementById('box5').addEventListener('click', open_destination_box5);

// San Francisco
function open_destination_box6(){
  window.open("https://goo.gl/maps/KZo1cFe1V1D2");
}
document.getElementById('box6').addEventListener('click', open_destination_box6);

// Further 3 - Alert user when they have entered an invalid destination
function alert_user_for_invalid_destination(value){
  console.log("Destination user has input = " + value);
  var valid_destination = true;
  for (var i=0; i<country_list.length; i++){
    if (value != country_list[i]) {
      valid_destination = false;
    }
    else if (value === country_list[i]) {
      console.log("Hooray!, destination found!");
      valid_destination = true;
      console.log("Valid destination: valid_destination = " + valid_destination);
      return valid_destination;
    }
  }
  if (valid_destination === false) {
    alert("Sorry mate, you have input a invalid destination!~~~");
    console.log("Invalid destination: valid_destination = " + valid_destination);
    document.getElementById('alert_message').style.display = "block";
    return valid_destination;
  }
}

// Further 1 - Open a new window displaying destination on google maps when user click submit
function retrieve_and_display_destination(){
  var input_text = document.getElementById('destination-search').value;
  var destination_search_result = alert_user_for_invalid_destination(input_text);
  if (destination_search_result === true) {
    window.open("https://www.google.com.sg/maps/place/" + input_text);
  }
}
document.getElementById("submit-destination").addEventListener('click', retrieve_and_display_destination);


// Further 2 - Open a new window displaying destination on google maps when user press enter
// Further 3 - Alert user when they have entered an invalid destination
document.getElementById("destination-search").addEventListener('change', retrieve_and_display_destination);
