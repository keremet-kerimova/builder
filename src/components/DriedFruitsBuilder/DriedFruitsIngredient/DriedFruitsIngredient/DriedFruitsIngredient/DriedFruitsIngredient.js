//  import classes from "./DriedfruitsIngredient.module.css"

import classes from "*.module.css";

 
 const DriedfruitsIngredient =({ type }) => {
      const types = {
          kiwi:{ backgroundColor:'red', with:"35px", height:"35px"},
          nuts:{ backgroundColor: 'brown', with:"35px", height:"35px"},
      }
     return(
         <div >{classes.DriedfruitsIngredient} style={types[type]}</div>
     );
 }
  export default DriedfruitsIngredient;