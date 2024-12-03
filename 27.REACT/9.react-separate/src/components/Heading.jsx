import React from "react";

function Heading() {
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

    return (
        <h1 className="heading" style={customStyleDay}>Good {dayStatus}</h1>
    );
}

export default Heading;