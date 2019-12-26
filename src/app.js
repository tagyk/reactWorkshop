console.log('Test running');

var user = {
    name:'Taygun',
    surname: 'Karpuzoglu',
    company: 'Jean Company'};
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
    if(company)
        return <li><b>Company Name:</b> {company}</li>;
    else
        return <p>-end of list-</p>
        
}

var conditionalTemplate = (
    <div>
        <h1>JSX Template Example</h1>
        <h2>Information</h2>
        <p>Locations</p>
        <ul type="circle">
            <li>Turkey</li>
            <li>Istanbul</li>
            <li>Tokyo</li>
        </ul>
        <p>Personal</p>
        <ul type="square">
            <li><b>Name:</b> {user.name}</li>
            <li><b>Surname:</b> {user.surname}</li>
            <li><b>Gender:</b>Male</li>
            {getInfo(user.company)}
        </ul>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(conditionalTemplate, appRoot);
