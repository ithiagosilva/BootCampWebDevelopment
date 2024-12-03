//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
let dayStatus;

const dayTime = new Date(2019, 1, 1, 10).getHours();
const customStyleDay = {}


if (dayTime < 12) {
    dayStatus = "Morning";
    customStyleDay.color = "red"

} else if (dayTime < 18) {
    dayStatus = "Afternoon";
    customStyleDay.color = "green"

} else {
    dayStatus = "Evening";
    customStyleDay.color = "blue"
}


ReactDOM.render(
    <div>
        <h1 className="heading" style={customStyleDay}>Good {dayStatus}</h1>
    </div>,
    document.getElementById('root')
);