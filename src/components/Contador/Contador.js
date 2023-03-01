import { useEffect, useState } from "react"

export const Contador = () => {

    const [counter, setCounter] = useState(1)
    const [hola, setHola] = useState(true)
    
    const handleClick = () => {
        setCounter( counter + 1 )
    }

    const handleHola = () => {
        setHola( !hola )
    }

    useEffect(() => {
        //Efecto de montaje
        console.log('Componente montado')

        return () => {
            // Efecto de desmontaje
            console.log("Componente desmontado")
        }
    }, [])

    useEffect(() => {
        //Efecto con dependencias
        if (counter % 10 === 0){
            console.log('Multiplo de 10')
        }
    }, [counter])
    
    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me !</button>
            <p>Clicks: {counter} </p>
            <hr />

            <p>FyH: {new Date().toLocaleTimeString()}</p>

            <button onClick={handleHola} className="btn btn-success">
                { hola ? "Hola Mundo" : "Chau mundo" }
            </button>
        </div>
    )
}