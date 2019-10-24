
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

