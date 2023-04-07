import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";

// Firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Router
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const itemId = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId.id);
    setProduct(null);

    setTimeout(() => {
      getDoc(itemRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProduct({ id: snapshot.id, ...snapshot.data() });
          };
        })
        .catch((err) => console.log("Catch error:", err));
    }, 200);
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;