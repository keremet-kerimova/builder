import { useDispatch } from "react-redux";
import Button from "../../../../components/Ul/Button/Button";
import DriedFruitsIngredient from "../../DriedFruitsIngredient/DriedFruitsIngredient";
import classes from "./Control.module.css";

const Control = ({ type,count }) => {
  const dispatch = useDispatch
  return (
    <div className={classes.Control}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <DriedFruitsIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default Control;