
import React, {useState} from 'react'

const SmithJohn = ( props) => {

    const [contador, setContador] = useState(88);

    const handleContador = () => {
        setContador(contador +1);
    }

    return (
        <>
        <h2>Smith, John</h2>
        <p> Age: {props.Age} <strong>{contador}</strong></p>
        <p> Hair Color: {props.HairColor}</p>
        <button onClick={handleContador}>Birthday Button for John Smith</button>
        </>
    )
}

export default SmithJohn