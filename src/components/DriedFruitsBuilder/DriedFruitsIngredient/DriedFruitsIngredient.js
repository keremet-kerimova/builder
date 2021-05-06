import React from "react";

import classes from "./DriedFruitsIngredient.module.css";
import nullBackground from "../../../images/kuraga.png";
import kiwiBackground from "../../../images/apricot.png";
import prunesBackground from "../../../images/raisins.png";
import cashewBackground from "../../../images/apple.png";
import datesBackground from "../../../images/dates1.png";
import raisinsBackground from "../../../images/raisins.png";



const DriedFruitsIngredient = ({ type, fixed }) => {
  const types = {
    cashew : {
      backgroundImage: `url(${cashewBackground})`,
      width: "35px",
      height: "35px",
      backgroundSize:"cover",
    },
    dates : {
      backgroundImage: `url(${datesBackground})`,
      width: "55px",
      height: "55px",
      backgroundSize:"cover",
    },
    kiwi: {
      backgroundImage: `url(${kiwiBackground})`,
      width: "55px",
      height: "55px",
      backgroundSize:"cover",
    },
    null: {
      backgroundImage: `url(${nullBackground})`,
      width: "60px",
      height: "60px",
      backgroundSize:"cover",
    },
    prunes: {
      backgroundImage: `url(${prunesBackground})`,
      width: "65px",
      height: "65px",
      backgroundSize:"cover",
    },
    raisins: {
      backgroundImage: `url(${raisinsBackground})`,
      width: "60px",
      height: "60px",
      backgroundSize:"cover",
    },
    
    
  };

  function getPosition(ingredientWidth) {
    const fruitsDiameter = 350;
    const fruitsRadius = fruitsDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 4;

    const ingredientTop = Math.round(Math.random() * fruitsDiameter);
    const ingredientLeft = Math.round(Math.random() * fruitsDiameter);

    const distance =
      Math.sqrt(
        Math.pow(ingredientTop - fruitsRadius, 2) +
          Math.pow(ingredientLeft - fruitsRadius, 2)
      ) + ingredientRadius;

    return distance < fruitsRadius
      ? {
          top: ingredientTop - ingredientRadius,
          left: ingredientLeft - ingredientRadius,
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
};

export default React.memo(DriedFruitsIngredient);
