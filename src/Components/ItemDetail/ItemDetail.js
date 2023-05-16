import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    return(
        <article className="CardItems">
            <header className="Headers">
                <h2 className="ItemHeaders">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail