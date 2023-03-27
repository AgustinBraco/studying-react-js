import './itemdetail.css';
import Purchaser from '../Purchaser';

function ItemDetail({itemFound}) {
  return (
    <div className="detailContainer">
      <div className="detailImageContainer">
        <img src={itemFound.image} className="detailImage" alt="motorcycle-detail-image" />
      </div>
      <div className="detailTextContainer">
        <p className="detailBrand">{itemFound.brand}</p>
        <p className="detailModel">{itemFound.model}</p>
        <p className="detailColor">{itemFound.color}</p>
        <p className="detailPrice">$ {itemFound.price}</p>
        <Purchaser itemFound={itemFound}></Purchaser>
      </div>
    </div>
  );
};

export default ItemDetail;