import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    return (
        <div className="contenedor">
            <h2>Item List Container</h2>
            {greeting}
            <hr />
        </div>
    )
}

export default ItemListContainer

