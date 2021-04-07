import classes from "./DriedFruitsBuilder.module.css";
import DriedFruitsPreviews from "../DriedFruitsPreviews/DriedFruitsPreviews";
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";

import { useEffect, useState } from "react";
import axios from "axios"

const DriedFruitsBuilder = () => {
  const prices = {
    tomato: 5,
    salami: 4,
    blackOlive: .5,
    greenOlive: .5,
    redPepper: 3,
    yellowPepper: 2,
  };
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
  });

  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(
    () => axios
      .get('https://builder-6d74a-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        setIngredients(response.data.ingredients);
      }),[]
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.DriedFruitsBuilder}>
    <DriedFruitsPreviews price={price} ingredients={ingredients} />
    <DriedFruitsControls
      ingredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      />
  </div>
  )
  }

export default DriedFruitsBuilder;