import DriedFruitsPreviews from "../DriedFruitsPreviews/DriedFruitsPreviews"
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";
import classes from "./DriedFruitsBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../../components/Ul/Modal/Modal";

const DriedFruitsBuilder = () => {
  const prices = {
   dateFruit:3,
   driedapricots:1,
   null:2,
   prunes:1

  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState();
  const [ordering, setOrdering] = useState(false);

  useEffect(
    () => axios
      .get('https://builder-6d74a-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);
        setIngredients(response.data.ingredients);
      }), []
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

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreviews
        ingredients={ingredients}
        price={price} />
      <DriedFruitsControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default DriedFruitsBuilder;