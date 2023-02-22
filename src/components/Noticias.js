import { Tutores } from "./Tutores"

export const Noticias = () => {
    // -- Para facilitar la sintaxis, abro parentesis en el return, asi facilito la legibilidad
    return (

        <section>

            <h4>Noticias de hoy</h4>
            <hr />
            <p>Lorem ipsum etc...</p>

            <div>
                Esto es un div
                <Tutores />
            </div>

        </section>

    )
}

// export default Noticias