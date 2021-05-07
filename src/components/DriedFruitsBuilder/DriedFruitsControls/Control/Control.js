 import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../Ul/Button/Button";
import DriedFruitsIngredient from "../../DriedFruitsIngredient/DriedFruitsIngredient";
import classes from "./Control.module.css";

const Control = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.Control}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <DriedFruitsIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default Control;