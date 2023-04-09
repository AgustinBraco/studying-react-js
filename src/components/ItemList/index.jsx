import "./itemlist.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context";

function ItemList({ products }) {
  const { setCount } = useContext(Context);
  setCount(0);

  if (!products) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="cardsContainer">
        {products.map((arr) => {
          return (
            <div key={arr.id} className="cardHover">
              <Link to={`/item/${arr.id}`} className="card">
                <img
                  src={arr.image}
                  alt="motorcycle-image"
                  className="cardImage"
                />
                <p className="cardBrand">{arr.brand}</p>
                <p className="cardModel">{arr.model}</p>
                <p className="cardPrice">US$ {arr.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
};

export default ItemList;