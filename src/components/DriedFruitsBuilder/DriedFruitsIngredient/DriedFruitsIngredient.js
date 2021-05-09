import React from "react";

import classes from "./DriedFruitsIngredient.module.css";
import datesBackground from "../../../images/dates1.png";
import kiwiBackground from "../../../images/kiwi.png";
import kuragaBackground from "../../../images/kuragas.png";
import raisinsBackground from "../../../images/raisins.png";
import appleBackground from "../../../images/apple.png";
import apricotBackground from "../../../images/apricot.png"

const DriedFruitsIngredient = ({ type, fixed }) => {
  const types = {
    dates : {
      backgroundImage: `url(${datesBackground})`,
      width: "85px",
      height: "65px",
      backgroundSize:"cover",
    },
    kiwi: {
      backgroundImage: `url(${kiwiBackground})`,
      width: "95px",
      height: "85px",
      backgroundSize:"cover",
    },
    kuraga: {
      backgroundImage: `url(${kuragaBackground})`,
      width: "70px",
      height: "65px",
      backgroundSize:"cover",
    },
    raisins: {
      backgroundImage: `url(${raisinsBackground})`,
      width: "65px",
      height: "55px",
      backgroundSize:"cover",
    },
    apple : {
      backgroundImage: `url(${appleBackground})`,
      width: "55px",
      height: "55px",
      backgroundSize:"cover",
    },
    apricot: {
      backgroundImage: `url(${apricotBackground})`,
      width: "75px",
      height: "65px",
      backgroundSize:"cover",
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
