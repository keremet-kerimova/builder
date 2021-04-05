import classes from "./DriedFruitsBuilder.module.css";
import DriedFruitsPreviews from "../DriedFruitsPreviews/DriedFruitsPreviews";
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";
import { useEffect, useState } from "react";



const DriedFruitsBuilder = () => {
  const [ingredients, setIngredients] = useState ({
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  });

  function addIngredient(type){
   const newIngredients = { ...ingredients };
   newIngredients[type]++;
   setIngredients(newIngredients);
  }

  function removeIngredient(type){
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
   }

  useEffect(() => {
    axios.get('https://builder-6d74a-default-rtdb.firebaseio.com/ingredients.json'
      .then((response) => {
        console.log(response);
        const email = response.data.email;
        setEmail(email);
      }), [userId]);
  

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreviews ingredients={ingredients} />
      <DriedFruitsControls  ingredients={ingredients}  addIngredient = {addIngredient} removeIngredient ={removeIngredient} />
    </div>
  );
}

export default DriedFruitsBuilder;
 