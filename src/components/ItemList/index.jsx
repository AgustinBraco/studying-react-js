import './itemlist.css';
import {useId} from "react";

function ItemList({cardsFiltered}) {
    const newId = useId();
    return (
      <div className="cardsContainer">
        {cardsFiltered.map((arr) => {
          return (
            <div key={newId}>
              <a href={`/item/${arr.id}`} className="card">
                <img  src={arr.image} alt="motorcycle-image" className="cardImage" />
                <p className="cardBrand">{arr.brand}</p>
                <p className="cardModel">{arr.model}</p>
                <p className="cardPrice">$ {arr.price}</p>
              </a>
            </div>
          )})}
      </div>
    );
};
  
export default ItemList;