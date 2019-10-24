console.log('App.js is running!')

//JSX - Javascript XML
const templateTwo= (
    <div>
        <h1> GOku </h1>
        <p> Age: infinito alv </p>
        <p>Location: mi casa</p>

    </div>
)


//1. Create a templateTwo
//2. <div> <h1>NAME<h1> <p>AGE: AGE </p> <p> LOCATION: LOCATION </p>

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)