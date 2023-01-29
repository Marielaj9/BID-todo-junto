
import React, { Fragment } from 'react'
import { useState } from 'react'

const DoeJane = ( props) => {

    const [contador, setContador] = useState(45);

    const handleContador = () => {
        setContador(contador +1);
    }

    
        return (
            <>
            <h2>Doe, Jane</h2>
            <p> Age: {props.Age} <strong>{contador}</strong></p>
            <p> Hair Color: {props.HairColor}</p>
            <button onClick={handleContador}>Birthday Button for Jane Doe</button>
            </>
        
        )
    
    
}

export default DoeJane