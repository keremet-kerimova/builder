import classes from "./DriedFruitsIngredient.module.css";
import React from "react";
import nullBackground from "../../../images/null.svg";
import kiwiBackground from "../../../images/kiwi.svg";
import driedBackground from "../../../images/foto.jpg";



const DriedFruitsIngredient = ({ type, fixed }) => {
  const types = {
    null: { backgroundImage: `url(${nullBackground})`},
    kiwi: { backgroundImage: `url(${kiwiBackground})`},
   dried: { backgroundImage: `url(${driedBackground})`},
  };

  
  function getPosition(ingredientWidth) {
    const driedfruitsDiametr = 380;
    const driedfruitsRadius = driedfruitsDiametr / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * driedfruitsDiametr);
    const ingredientLeft = Math.round(Math.random() * driedfruitsDiametr);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - driedfruitsRadius, 2) + Math.pow(ingredientLeft - driedfruitsRadius, 2)
    ) + ingredientRadius;

    return distance < driedfruitsRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
  }


  return (
    <div className={classes.DriedFruitsIngredient} style={types[type]}></div>
  );
}

export default React.memo(DriedFruitsIngredient);
 