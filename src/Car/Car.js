import React from "react";

function Car(props) {
    return (
        <div>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
        </div>
    )
}

export default Car