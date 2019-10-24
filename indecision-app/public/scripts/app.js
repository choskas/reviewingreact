'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' GOku '
    ),
    React.createElement(
        'p',
        null,
        ' Age: infinito alv '
    ),
    React.createElement(
        'p',
        null,
        'Location: mi casa'
    )
);

//1. Create a templateTwo
//2. <div> <h1>NAME<h1> <p>AGE: AGE </p> <p> LOCATION: LOCATION </p>

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
