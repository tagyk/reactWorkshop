console.log('Test running');

const user = {
    name:'Taygun',
    surname: 'Karpuzoglu',
    skills: [ '.net', 'nodejs', 'mongoDB'],
    company: 'Jean Company'};
//JSX - JavaScript XML

const template = (
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

function getInfo(company) {
    if(company)
        return <li><b>Company Name:</b> {company}</li>;
    else
        return <p>-end of list-</p>
        
}

const conditionalTemplate = (
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
            <li>{ user.skills.length > 0 ? "These are my skills" : "No skills" }</li>
            { user.skills.length > 0 ?
            <ol>
                <li>First skill</li>
                <li>Second skill</li>
                <li>Third skill</li>
            </ol>  :
            <p>-</p>
            }
            {getInfo(user.company)}
        </ul>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(conditionalTemplate, appRoot);
