console.log('App.js is running!')

//JSX - Javascript XML
const app = {
    title: 'Loquesea',
    subtitle: 'cosachida',
    options: []
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

const onFormSubmit = (e)=>{
    e.preventDefault()

   const option = e.target.elements.option.value
   
   if (option){
       app.options.push(option)
       e.target.elements.option.value = ''
       render()
   }
}




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

const removeAll = () =>{
    app.options = []
    render()
}

const appRoot = document.getElementById('app')

const numbers = [55, 22 , 333]

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () =>{

    const template = (
        <div>
            <h1>{app.title} </h1>
            <h2>changes</h2>
            {appTitleExist(app.subtitle)}
            <p>{app.options.length > 0 ? 'Here they are' : 'No options'}</p>
            <button onClick= {removeAll}> Remove All  </button>
            <button disabled={app.options.length === 0} onClick= {onMakeDecision}> Do </button>
            {
                numbers.map((i,number) => (
                    
                    <p key={i}>number: {number}</p>
                   
                ))
            }
            <ol>
                {
                    app.options.map((option)=>{
                     return   <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
                
            </form>
        </div>
    )

ReactDOM.render(template, appRoot)
}


render()