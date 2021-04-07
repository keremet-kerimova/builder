import DriedFruitsIngredients from "../DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient";
import classes from "./DriedFruitsPreviews.module.css";
// import ingredientsBackground from "../../../images/cheese.svg";

const DriedFruitsPreviews = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<DriedFruitsIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.DriedFruitsPreviews}>
      <div className={classes.pizza}>
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}



export default DriedFruitsPreviews;