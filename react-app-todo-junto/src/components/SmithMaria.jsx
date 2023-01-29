import React,{useState} from 'react'

const SmithMaria = ( props) => {

    const [contador, setContador] = useState(62);

    const handleContador = () => {
        setContador(contador +1);
    }


    return (
        <>
        <h2>Smith, Maria</h2>
        <p> Age: {props.Age} <strong>{contador}</strong></p>
        <p> Hair Color: {props.HairColor}</p>
        <button onClick={handleContador}>Birthday Button for Jane Doe</button>
        </>
    )
}

export default SmithMaria