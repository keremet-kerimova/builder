import DriedFruitsIngredient from "../DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient";
import classes from "./DriedFruitsPreviews.module.css";

const DriedFruitsPreviews = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<DriedFruitsIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.DriedFruitsPreviews}>
      <div
        className={classes.ingredients}>
        {result}
      </div>
    </div>
  );
}

export default DriedFruitsPreviews;