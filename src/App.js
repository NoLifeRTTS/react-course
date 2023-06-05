import React from "react";
import './App.css';
import Car from "./Car/Car";

function App() {
    const divStyle = {
        textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1>Hello world!!</h1>
          <Car name='Ford Focus' year={2017} />
          <Car name='Audi A8' year={2015} />
          <Car name='Mazda 3' year={2010} />
      </div>
    );

}

export default App;
