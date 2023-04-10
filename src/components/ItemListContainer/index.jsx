import ItemList from "../ItemList/index";

// Router
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const brandName = useParams();

  return <ItemList brandName={brandName} />;
};

export default ItemListContainer;