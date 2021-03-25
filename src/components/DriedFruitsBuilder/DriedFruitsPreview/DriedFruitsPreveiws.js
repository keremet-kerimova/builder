import classes from "./DriedFruitsBuilder.module.css" 
import DriedFruitsPreview from "./DriedFruitsPreview/DriedFruitsPreveiws";
import ingredientsBackground from "../../../images/cheese.svg";

const DriedFruitsPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<DriedFruitsIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.DriedFruitsPreview }>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default DriedFruitsPreview ;