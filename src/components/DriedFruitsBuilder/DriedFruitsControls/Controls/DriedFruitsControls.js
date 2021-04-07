import Control from "../Control/Control";
import classes from "./DriedFruitsControls.module.css";;
import Button from "../../../Ul/Button/Button"

const DriedFruitsControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
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
        count={ingredients[ingredient]}
        type={ingredient} />)
  }
  return (
    <div className={classes.DriedFruitsControls}>
    <strong>Ingredients</strong>
    {results}
    <Button disabled={!total} onClick={startOrdering}>Order</Button>
  </div>
  );
}

export default DriedFruitsControls;