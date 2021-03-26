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

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreviews ingredients={ingredients} />
      <DriedFruitsControls  ingredients={ingredients} />
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