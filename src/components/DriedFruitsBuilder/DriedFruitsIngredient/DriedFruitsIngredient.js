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

  
  function getPosition(driedfruitsWidth) {
    const driedfruitsDiametr = 260;
    const driedfruitsRadius = driedfruitsDiametr / 10;
    const ingredientRadius = parseInt(driedfruitsWidth) / 8;

    const ingredientTop = Math.round(Math.random() * driedfruitsDiametr);
    const ingredientLeft = Math.round(Math.random() * driedfruitsDiametr);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - driedfruitsRadius, 5) + Math.pow(ingredientLeft - driedfruitsRadius, 1)
    ) + ingredientRadius;

    return distance < driedfruitsRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(driedfruitsWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 0)}deg)`;
  }


  return (
    <div className={classes.DriedFruitsIngredient} style={types[type]}></div>
  );
}

export default React.memo(DriedFruitsIngredient);
 