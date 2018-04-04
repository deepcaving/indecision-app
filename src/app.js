console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: "Best book ever",
    subtitle: "So cool!",
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    </div>    
);

const user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}      
    </div>
);
const appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);