'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var app = {
    title: 'Loquesea',
    subtitle: 'cosachida',
    options: ['one', 'two']
};

function appTitleExist(subtitle) {
    if (subtitle) {
        return React.createElement(
            'p',
            null,
            'Title: ',
            subtitle
        );
    }
}

function optionsExist(options) {
    if (options.length > 0) {
        return React.createElement(
            'li',
            null,
            options
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    appTitleExist(app.subtitle),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here they are' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        optionsExist(app.options)
    )
);

var user = {
    name: 'yoplai',
    age: 5000,
    location: 'mi casa'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonymus',
        ' '
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var removeOne = function removeOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '++'
        ),
        React.createElement(
            'button',
            { onClick: removeOne },
            '--'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'RESET'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
