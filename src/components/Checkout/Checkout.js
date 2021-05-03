import CheckoutForm from "../../components/Checkout/CheckoutForm/ChecoutForm"
import DriedFruitsPreviews from "../../components/DriedFruitsBuilder/DriedFruitsPreviews/DriedFruitsPreviews"

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
      <CheckoutForm  />
    </div>
  );
}
 
export default Checkout;