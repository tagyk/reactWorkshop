'use strict';

console.log('Test running');

var user = {
    name: 'Taygun',
    surname: 'Karpuzoglu',
    company: 'Jean Company' };
//JSX - JavaScript XML
/*
var template = (
    <div>
        <h1>This JSX template Example</h1>
        <p>information</p>
        <ul>
            <li>First</li>
            <li>Second</li>
        </ul>
        <ul>
            <li><b>Name:</b> {user.name}</li>
            <li><b>Surname:</b> {user.surname}</li>
            <li><b>Third Name</b></li>
            <li>Fourth Name</li>
        </ul>
    </div>
);
*/
function getInfo(company) {
    if (company) return React.createElement(
        'li',
        null,
        React.createElement(
            'b',
            null,
            'Company Name:'
        ),
        ' ',
        company
    );else return React.createElement(
        'p',
        null,
        '-end of list-'
    );
}

var conditionalTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'JSX Template Example'
    ),
    React.createElement(
        'h2',
        null,
        'Information'
    ),
    React.createElement(
        'p',
        null,
        'Locations'
    ),
    React.createElement(
        'ul',
        { type: 'circle' },
        React.createElement(
            'li',
            null,
            'Turkey'
        ),
        React.createElement(
            'li',
            null,
            'Istanbul'
        ),
        React.createElement(
            'li',
            null,
            'Tokyo'
        )
    ),
    React.createElement(
        'p',
        null,
        'Personal'
    ),
    React.createElement(
        'ul',
        { type: 'square' },
        React.createElement(
            'li',
            null,
            React.createElement(
                'b',
                null,
                'Name:'
            ),
            ' ',
            user.name
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'b',
                null,
                'Surname:'
            ),
            ' ',
            user.surname
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'b',
                null,
                'Gender:'
            ),
            'Male'
        ),
        getInfo(user.company)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(conditionalTemplate, appRoot);
