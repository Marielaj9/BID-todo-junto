import React, {useState} from 'react'

const FillmoreMillard = ( props) => {

    const [contador, setContador] = useState(50);

    const handleContador = () => {
        setContador(contador +1);
    }

    return (
        <>
        <h2>Fillmore, Millard</h2>
        <p> Age: {props.Age}  <strong>{contador}</strong></p>
        <p> Hair Color: {props.HairColor}</p>
        <button onClick={handleContador}>Birthday Button for Millard Fillmore</button>
        </>
    )
}

export default FillmoreMillard