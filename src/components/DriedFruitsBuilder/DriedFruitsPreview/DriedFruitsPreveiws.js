import DriedfruitsIngredient from "../DriedFruitsIngredient/DriedFruitsIngredient.js";
import classes from "./DriedFruitsPreview.module.css";

const DriedFruitsPreview = ({ ingredients}) => {
   const result = [];

   for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
        result.push(<DriedfruitsIngredient type={ingredient} />)
    }
   }
   return (
       <div className={classes.DriedFruitsPreview}>
           {result}
       </div>
   )
}
export default DriedFruitsPreview;