class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            options : ['una', 'dos', 'tres']
        }
    }
    render(){
        const title = 'otra cosa'
        const subtitle = 'el subtitulo'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}
                />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={options} />
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handleClick(){

    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}> WTF !</button>
            </div>
        )
    }
}



class Options extends React.Component {
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
    }
    removeAll (){
       console.log(this.props.options)
    }
    render(){
        return(
        <div>
        
            {this.props.options.map((option) =>(
                <Option key={option} optionText={option}/>
            ))}
          <button onClick={this.removeAll}> Remove All</button>
        </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
        <div>
         Option: {this.props.optionText}
        </div>
        )
    }
}

class AddOption extends React.Component {
    handleAdd(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        if(option) {
            alert(option)
        }
    }
    render(){
        return(
            <div>
              <form onSubmit={this.handleAdd}>
                  <input type='text' name='option'>

                  </input>
                  <button>Add Option</button>
              </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))