import ItemList from "../ItemList/index";
import { useEffect, useState } from "react";

// Firebase
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Router
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const brandName = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    setProducts(null);

    setTimeout(() => {
      if (brandName.id === "All") {
        getDocs(itemsCollection)
          .then((snapshot) => {
            const docs = snapshot.docs;
            setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
          .catch((err) => console.log("Catch error:", err));
      } else {
        const queryResult = query(
          itemsCollection,
          where("brand", "==", brandName.id)
        );
        getDocs(queryResult)
          .then((snapshot) => {
            const docs = snapshot.docs;
            setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
          .catch((err) => console.log("Catch error:", err));
      };
    }, 200);
  }, [brandName]);

  return <ItemList products={products} />;
};

export default ItemListContainer;