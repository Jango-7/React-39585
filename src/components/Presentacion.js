export const Presentacion = ( {nombre, rol, edad} ) => {

    return (
        
        <article>
            <h2>Nombre: { nombre }</h2>
            <p>Rol: { rol }</p>
            <p><b>Edad: { edad }</b></p>
            <hr />
        </article>

    )
}