import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: "Joel", id: 1 },
                { name: "Michelle", id: 2 },
            ]
        }
    }
    render() {
        return (
            <div>
                <p>Updated Boilerplate to ES6</p>
                <h2>Items</h2>
                <ul>
                    {this.state.items.map( (item, i) => {
                        return <li>{item.name}</li>;
                    })}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <App />, document.getElementById('app'));
