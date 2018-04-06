"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: "Best book ever",
    subtitle: "So cool!",
    options: ['One', 'Two']
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    )
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
