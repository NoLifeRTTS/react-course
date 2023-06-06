import React, {Component} from "react";
import './App.css';
import Car from "./Car/Car";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford Focus', year: 2017},
            {name: 'Audi A8', year: 2015},
            {name: 'Mazda 3', year: 2010}
        ],
        pageTitle: 'React Components'
    }

    changeTitleHandler = newTitle => {

        this.setState({
            pageTitle: newTitle
        })

    }

    handleInput = event => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {

        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handleInput}/>

                <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>

                { this.state.cars.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
                        />
                    )
                }) }
            </div>
        );
    }
}

export default App;
