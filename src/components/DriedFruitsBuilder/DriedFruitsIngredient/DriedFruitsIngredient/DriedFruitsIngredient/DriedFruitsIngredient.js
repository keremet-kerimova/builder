import classes from "./DriedFruitsIngredient.module.css";

// import salamiBackground from "../../../images/salami.svg";
// import tomatoBackground from "../../../images/tomato.svg";
// import blackOliveBackground from "../../../images/blackOlive.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

const DriedFruitsIngredient = ({ type }) => {
  const types = {
    salami: { backgroundColor: "red", width: "35px", height: "35px" },
    tomato: { backgroundColor: "yellow", width: "35px", height: "35px" },
    blackOlive: { backgroundColor: "green", width: "10px", height: "10px" },
    greenOlive: { backgroundColor: "black", width: "10px", height: "10px" },
    redPepper: { backgroundColor: "blue", width: "20px", height: "20px" },
    yellowPepper: { backgroundColor: "red", width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.DriedFruitsIngredient} style={types[type]}></div>
  );
}


export default DriedFruitsIngredient;

// import classes from "./DriedFruitsIngredient.module.css";

// const DriedFruitsIngredient = () => {
//   return (
//     <div className={classes.DriedFruitsIngredient}>Ing</div>
//   );
// }

// export default DriedFruitsIngredient;
