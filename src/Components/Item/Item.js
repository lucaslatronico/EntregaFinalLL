import './Item.css'
// import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Item = ({id, name, img, price}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                {/* <p className='Info'>
                    Stock disponible: {stock}
                </p> */}
            </section>
            <footer className='ItemFooter'>
                <Button variant="secondary"> <Link to={`/Item/${id}`} className='Option'>Ver Detalle</Link> </Button>
            </footer>
        </article>
    )
}

export default Item
