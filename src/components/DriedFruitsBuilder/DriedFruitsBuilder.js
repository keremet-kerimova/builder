import classes from "./DriedFruitsBuilder.module.css" 
import DriedFruitsPreview from "./DriedFruitsPreview/DriedFruitsPreveiws";

const DriedFruitsBuilder = () => {
    const ingredients = {
        kiwi:1,
        nuts:2,
        raisins:3,
    };
    return(
        <div className ={classes.DriedFruitsBuilder}>
         <DriedFruitsPreview ingredients={ingredients} />
         <DriedFruitsControl />

        </div>
    );
}
export default DriedFruitsBuilder;   