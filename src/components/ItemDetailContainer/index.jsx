import Products from "../../mocks/products"
import ItemDetail from "../ItemDetail";

// Router
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
  const itemId = useParams();

  const itemFound = Products.find(element => {
    return element.id == itemId.id
  })

  return (
    <ItemDetail itemFound={itemFound}/>
  );
};

export default ItemDetailContainer;