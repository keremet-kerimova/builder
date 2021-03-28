import Control from "../Control/Control";
import classes from "./DriedFruitsControls.module.css";;

const DriedFruitsControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<Control
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.DriedFruitsControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default DriedFruitsControls;