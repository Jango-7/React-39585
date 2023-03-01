
export const Noticias = ({ children }) => {
    // console.log(props)
    // -- Para facilitar la sintaxis, abro parentesis en el return, asi facilito la legibilidad
    return (

        <section>

            <h4>Noticias de hoy</h4>
            <hr />
            {children}
            <div>
                Esto es un div, debajo del children.
            </div>

        </section>

    )
}

// export default Noticias