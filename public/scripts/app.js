'use strict';

console.log('Test is running');

var user = {
    name: 'Taygun',
    surname: 'Karpuzoglu',
    skills: ['.net', 'nodejs', 'mongoDB'],
    company: 'Jean Company' };
//JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This JSX template Example'
    ),
    React.createElement(
        'p',
        null,
        'information'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'First'
        ),
        React.createElement(
            'li',
            null,
            'Second'
        )
    ),
    React.createElement(
        'ul',
        null,
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
                'Third Name'
            )
        ),
        React.createElement(
            'li',
            null,
            'Fourth Name'
        )
    )
);

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
        React.createElement(
            'li',
            null,
            user.skills.length > 0 ? "These are my skills" : "No skills"
        ),
        user.skills.length > 0 ? React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'First skill'
            ),
            React.createElement(
                'li',
                null,
                'Second skill'
            ),
            React.createElement(
                'li',
                null,
                'Third skill'
            )
        ) : React.createElement(
            'p',
            null,
            '-'
        ),
        getInfo(user.company)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(conditionalTemplate, appRoot);
