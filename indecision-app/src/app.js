class IndecisionApp extends React.Component {
    render(){
        const title = 'otra cosa'
        const subtitle = 'el subtitulo'
        const options = ['una', 'dos', 'tres']
        return (
            <div>
                <Header title={title} subtitle={subtitle}
                />
                <Action/>
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
    render(){
        return (
            <div>
                <button> WTF !</button>
            </div>
        )
    }
}



class Options extends React.Component {
    render(){
        return(
        <div>
        
            {this.props.options.map((option) =>(
                <Option key={option} optionText={option}/>
            ))}
          
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
    render(){
        return(
            <div>
                <button>Add options xdd</button>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))