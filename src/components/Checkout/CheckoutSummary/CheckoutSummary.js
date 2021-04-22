import classes from "./CheckoutSummary.module.css";
import DriedFruitsPreviews from "../../DriedFruitsBuilder/DriedFruitsPreviews/DriedFruitsPreviews";
import Button from "../../Ul/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <DriedFruitsPreviews ingredients={{
           cashew:1,
           dates:1,
           kiwi:1,
           null:2,
           prunes:1,

        
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}

export default CheckoutSummary;