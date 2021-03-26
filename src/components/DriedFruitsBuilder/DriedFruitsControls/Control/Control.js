import classes from "./Control.module.css"
import DriedFruitsIngredient from "../../DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient/DriedFruitsIngredient"

const Control = ({type, addIngredient, removeIngredient}) =>{
    return(
        <div className={classes.Control}>
           <button onClick={()=> addIngredient(type)}>+</button>
           <DriedFruitsIngredient type={type} />
           <button onClick={()=> removeIngredient(type)}>-</button>
        </div>
    )
}
export default  Control;