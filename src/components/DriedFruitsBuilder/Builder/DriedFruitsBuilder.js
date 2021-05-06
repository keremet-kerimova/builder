import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../../Ul/Modal/Modal";
import classes from "./DriedFruitsBuilder.module.css";
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";
import DriedFruitsPreviews from "../DriedFruitsPreviews/DriedFruitsPreviews";
import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../../Ul/Button/Button";
import { useSelector } from "react-redux";

const DriedFruitsBuilder = ({ history }) => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: .3,
    blackOlive: .3,
    redPepper: 2,
    yellowPepper: 1,
  }

  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);

  const [ordering, setOrdering] = useState(false);



  
  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }

 
  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  //  function finishOrdering() {
  //   axios
  //     .post('https://builder-6d74a-default-rtdb.firebaseio.com/orders.json',{
  //       ingredients: ingredients,
  //       price: price,
  //       address: "Shopokova kv 4",
  //       phone:"0707379480",
  //       name:"Keremet Kerimova",
  //     })
  //     .then(() =>{
  //       setOrdering(false);
  //       // loadDefaults();
  //       history.push('/checkout')
  //     })
    
  //  }

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreviews
        ingredients={ingredients}
        price={price} />
      <DriedFruitsControls
        ingredients={ingredients}
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