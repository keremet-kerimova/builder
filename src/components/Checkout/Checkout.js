import CheckoutForm from "../../components/Checkout/CheckoutForm/ChecoutForm"
import DriedFruitsPreviews from "../../components/DriedFruitsBuilder/DriedFruitsPreviews/DriedFruitsPreviews"
import classes from "./Checkout.module.css"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
       <div>
        <DriedFruitsPreviews ingredients={{
           cashew:1,
           dates:1,
           kiwi:1,
           null:2,
           prunes:1,
        }} price={150} />
      <CheckoutForm 
         cancelCallback={cancelCallback}
          />
    </div>
  );
}
 
export default Checkout;