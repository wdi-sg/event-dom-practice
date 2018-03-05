# Dynamic AirBnB Page

## DOM and Event Practice

Start with the starter code- Nick's solution to the AirBnB exercise.

Refer back to the gitbook section on DOM and Events.
[DOM Manipulation](https://wdi-sg.github.io/gitbook-2018/02-js/js-dom-events/readme.html)
[Events](https://wdi-sg.github.io/gitbook-2018/02-js/js-dom-events/readme.html#events)

- Attach a click event listener to the **See All Guidebooks** button. `Alert` the user that this feature isn't done yet.
- Attach a click event listener to the **See All Destinations** button. `Alert` the user that this feature isn't done yet.
- Attach a click event listener to each desitination square. Inside the callback function, use `window.open` to trigger a new window with a google map page of that destination.
- Example url (just copy the entire url from the address bar): `https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en`

#### Further 1
- Using this HTML
```
<input id="destination-search" type="text"/>
<button id="submit-destination">
  submit
</button>
```
- Create a search input that will open a new window when the user types in one of the destinations and clicks submit
#### Further 2
- Using the `change` event on the `input` detect when the user has entered a valid destination name, and open the window (without the need to click the submit button);
#### Further 3
- `alert` the user that they have not entered a valid destination name, and clear the input so that they can try again.
#### Further 4
- Create a div and show the user a message that they have not entered a valid destination. Style the messgae in red, so the user knows it's serious.
