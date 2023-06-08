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
        pageTitle: 'React Components',
        showCars: false
    }

    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars
        })
    }

    toggleCarsHandler = () => {
        this.setState({
                showCars: !this.state.showCars
        })
    }

    deleteHandler(index) {
        const cars = [...this.state.cars]
        cars.splice(index, 1);
        this.setState({
            cars
        })
    }

    render() {

        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                {   this.state.showCars ?
                        this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeName={event => {this.onChangeName(event.target.value, index)}}
                                onDelete={this.deleteHandler.bind(this, index)}
                            />
                        )
                    })
                    :
                        null
                }
            </div>
        );
    }
}

export default App;
