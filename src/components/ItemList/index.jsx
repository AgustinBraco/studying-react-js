import './itemlist.css';
import {Link} from 'react-router-dom';

function ItemList({cardsFiltered}) {
    return (
      <div className="cardsContainer">
        {cardsFiltered.map((arr) => {
          return (
            <div key={arr.id}>
              <Link to={`/item/${arr.id}`} className="card">
                <img src={arr.image} alt="motorcycle-image" className="cardImage"/>
                <p className="cardBrand">{arr.brand}</p>
                <p className="cardModel">{arr.model}</p>
                <p className="cardPrice">$ {arr.price}</p>
              </Link>
            </div>
          )})};
      </div>
    );
};
  
export default ItemList;