'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var app = {
    title: 'Loquesea',
    subtitle: 'cosachida',
    options: []
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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

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

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 22, 333];

var render = function render() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        numbers.map(function (i, number) {
            return React.createElement(
                'p',
                { key: i },
                'number: ',
                number
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
