import React from "react";

import classes from "./DriedFruitsIngredient.module.css";
import nullBackground from "../../../images/null.svg";
import kiwiBackground from "../../../images/kiwi.svg";
import prunesBackground from "../../../images/prunes.svg";
import cashewBackground from "../../../images/foto8.svg";
import datesBackground from "../../../images/dates.svg";



const DriedFruitsIngredient = ({ type, fixed }) => {
  const types = {
    cashew : {
      backgroundImage: `url(${cashewBackground})`,
      width: "35px",
      height: "19px",
    },
    dates : {
      backgroundImage: `url(${datesBackground})`,
      width: "35px",
      height: "20px",
    },
    kiwi: {
      backgroundImage: `url(${kiwiBackground})`,
      width: "25px",
      height: "25px",
    },
    null: {
      backgroundImage: `url(${nullBackground})`,
      width: "45px",
      height: "25px",
    },
    prunes: {
      backgroundImage: `url(${prunesBackground})`,
      width: "44px",
      height: "20px",
    },
    
    
  };

  function getPosition(ingredientWidth) {
    const fruitsDiameter = 380;
    const fruitsRadius = fruitsDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

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
