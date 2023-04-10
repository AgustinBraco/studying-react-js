import "./itemdetail.css";
import Purchaser from "../Purchaser";


function ItemDetail({ product }) {
  if (!product) {
    return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
  } else {
    return (
      <div className="detailContainer">
        <div className="detailImageContainer">
          <img
            src={product.image}
            className="detailImage"
            alt="motorcycle-detail-image"
          />
        </div>
        <div className="detailTextContainer">
          <p className="detailBrand">{product.brand}</p>
          <p className="detailModel">{product.model}</p>
          <p className="detailColor">{product.color}</p>
          <p className="detailPrice">US$ {product.price}</p>
          <Purchaser product={product}></Purchaser>
        </div>
      </div>
    );
  };
};

export default ItemDetail;