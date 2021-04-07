import classes from "./DriedFruitsIngredient.module.css";
import React from "react";
import nullBackground from "../../../../../images/cashew.svg";
import kiwiBackground from "../../../../../images/kiwi.svg";
import driedBackground from "../../../../../images/foto.jpg";



const DriedFruitsIngredient = ({ type }) => {
  const types = {
    null: { backgroundImage: `url(${nullBackground})`, width: "35px", height: "35px" },
    kiwi: { backgroundImage: `url(${kiwiBackground})`, width: "35px", height: "35px" },
   dried: { backgroundImage: `url(${driedBackground})`, width: "10px", height: "10px" },
  };

 
  function getPosition(ingredientWidth) {
    const fruitsDiameter = 380;
    const fruitsRadius = fruitsDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * fruitsDiameter);
    const ingredientLeft = Math.round(Math.random() * fruitsDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - fruitsRadius, 2) + Math.pow(ingredientLeft - fruitsRadius, 2)
    ) + ingredientRadius;

    return distance < fruitsRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.DriedFruitsIngredient} style={types[type]}></div>
  );
}
export default React.memo(DriedFruitsIngredient);
