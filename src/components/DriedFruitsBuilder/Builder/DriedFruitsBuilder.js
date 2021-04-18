import DriedFruitsPreviews from "../DriedFruitsPreviews/DriedFruitsPreviews"
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";
import classes from "./DriedFruitsBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../../../components/Ul/Modal/Modal";
import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../../Ul/Button/Button";

const DriedFruitsBuilder = ({ history }) => {
  const prices = {
   null:2,
   kiwi:1,
   prunes:1,
   cashew:1,
   dates:1,

  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get('https://builder-6d74a-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      });
  }

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

  function finishOrdering() {
    axios
    .post('https://builder-6d74a-default-rtdb.firebaseio.com/orders.json',{
      ingredients: ingredients,
      price: price,
      address: "Shopokova kv 4",
      phone:"0707379480",
      name:"Keremet Kerimova",
    })
    .then(() =>{
      setOrdering(false);
      loadDefaults();
      history.puch('/checout')
    })
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
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
        
    </div>
  );
}

export default DriedFruitsBuilder;