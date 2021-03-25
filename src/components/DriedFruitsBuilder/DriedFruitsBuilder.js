import classes from "./DriedFruitsBuilder.module.css";
import DriedFruitsPreview from "./DriedFruitsPreview/DriedFruitsPreveiws";
import DriedFruitsControls from "./DriedFruitsControls/DriedFruitsControls";

const DriedFruitsBuilder = () => {
  const ingredients = {
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  };

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPreview ingredients={ingredients} />
      <DriedFruitsControls />
    </div>
  );
}

export default DriedFruitsBuilder;






// const DriedFruitsBuilder = () => {
//     const ingredients = {
//         kiwi:1,
//         nuts:2,
//         raisins:3,
//     };
//     return(
//         <div className ={classes.DriedFruitsBuilder}>
//          <DriedFruitsPreview ingredients={ingredients} />
//          <DriedFruitsControl />

//         </div>
//     );
// }
// export default DriedFruitsBuilder;   