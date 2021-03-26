import Control from "./Control/Control";
import classes from "./DriedFruitsControls.module.css";

const DriedFruitsControls = ({ingredients}) => {
  const result = [];
  for (const ingredient in ingredients) {
    result.push(<Control type={ingredient}/>)
    
    }
  return (
    <div className={classes.DriedFruitsControls}>{result}</div>
  );
}

export default DriedFruitsControls;