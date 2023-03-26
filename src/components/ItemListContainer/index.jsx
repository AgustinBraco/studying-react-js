import ItemList from "../ItemList/index"
import Products from "../../mocks/products"
import {useEffect, useState} from "react";

// Router
import {useParams} from 'react-router-dom';

function ItemListContainer() {
  const brandName = useParams();
  const [cards, setCards] = useState([]);
 
  useEffect(() => {
    const createCards = new Promise((resolve, reject) =>
      resolve(Products)
    );

    createCards
    .then((response) => {
      if (brandName.id) {
        const cardsFiltered = response.filter((Products) => Products.brand == brandName.id)
        setCards(cardsFiltered)
      } else {
        setCards(response)
      }})
    .catch((err) => console.log(err))}, [brandName]);

  return (
      <ItemList cardsFiltered={cards}/>
  );
};

export default ItemListContainer;