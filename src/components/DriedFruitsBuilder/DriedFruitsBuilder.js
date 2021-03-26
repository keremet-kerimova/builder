import classes from "./DriedFruitsBuilder.module.css";
import DriedFruitsPreviews from "./DriedFruitsPreviews/DriedFruitsPreviews";
import DriedFruitsControls from "./DriedFruitsControls/DriedFruitsControls";
import { useState } from "react";



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
   const newIngredient = { ...ingredients };
   newIngredient[type]++;
   setIngredients(newIngredients);
  }

  function removeIngredient(type){
    const newIngredient = { ...ingredients };
    newIngredient[type]--;
    setIngredients(newIngredients);
   }
  

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreviews ingredients={ingredients} />
      <DriedFruitsControls  ingredients={ingredients}  addIngredient = {addIngredient} removeIngredient ={removeIngredient} />
    </div>
  );
}

export default DriedFruitsBuilder;






// const DriedFruitsBuilder = () => {
//     const ingredients = {
//         kiwi:1,
//         nuts:2,
//         raisins:3,
//     };
//     return(
//         <div className ={classes.DriedFruitsBuilder}>
//          <DriedFruitsPreview ingredients={ingredients} />
//          <DriedFruitsControl />

//         </div>
//     );
// }
// export default DriedFruitsBuilder;   