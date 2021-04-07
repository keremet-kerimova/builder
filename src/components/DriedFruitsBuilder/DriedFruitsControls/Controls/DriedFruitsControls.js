import Control from "../Control/Control";
import classes from "./DriedFruitsControls.module.css";;


const DriedFruitsControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<Control
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.Controls}>
      <strong>Ingredients</strong>
      {results}
      <button disabled={!total}>Order</button>
    </div>
  );
}

export default DriedFruitsControls;