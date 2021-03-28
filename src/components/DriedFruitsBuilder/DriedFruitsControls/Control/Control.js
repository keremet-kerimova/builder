import DriedFruitsIngredient from "../../DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient";
import classes from "./Control.module.css";

const Control = ({ type, add, remove }) => {
  return (
    <div className={classes.Control}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <DriedFruitsIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default Control;