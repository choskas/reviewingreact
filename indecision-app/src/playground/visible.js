console.log('App.js is running!')

//JSX - Javascript XML
const app = {
    title: 'titulo chingon'
    
}
const appRoot = document.getElementById('app')

let visibility = false

const toggleVisibility = () =>{
    visibility = !visibility
    render()
}

const render = () =>{

    const template = (
        <div>
            <h1>{app.title} </h1>
           <button onClick={toggleVisibility}>
               {visibility ? 'Hide Details' : 'Show details'}
           </button>
          {visibility && (
              <div>
                  <p>The details</p>
              </div>
          )}
        </div>
    )

ReactDOM.render(template, appRoot)
}


render()
