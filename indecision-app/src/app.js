console.log('App.js is running!')

//JSX - Javascript XML
const app = {
    title: 'Loquesea',
    subtitle: 'cosachida',
    options: ['one', 'two']
}

function appTitleExist(subtitle){
    if (subtitle){
        return <p>Title: {subtitle}</p>
    }
}

function optionsExist(options){
    if (options.length > 0){
        return <li>{options}</li> 
    }
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {appTitleExist(app.subtitle)}
        <p>{app.options.length > 0 ? 'Here they are' : 'No options'}</p>
        <ol>
            {optionsExist(app.options)}
        </ol>
    </div>
)


const user = {
    name: 'yoplai',
    age: 5000,
    location: 'mi casa'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    
    }
}

const templateTwo= (
    <div>
        <h1> {user.name ? user.name : 'Anonymus'} </h1>

        {user.age >= 18 && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)


let count = 0
const addOne = () =>{
     count ++
     renderCounterApp()
}

const removeOne = () =>{
    count --
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}




const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>++</button>
            <button onClick={removeOne}>--</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
    ReactDOM.render(templateThree, appRoot)

}

renderCounterApp()

