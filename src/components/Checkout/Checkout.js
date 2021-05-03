import DriedFruitsPreviews from "../DriedFruitsBuilder/DriedFruitsPreviews/DriedFruitsPreviews";
import CheckoutForm from "../../components/Checkout/CheckoutForm/ChecoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-6d74a-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: {
        cashew: 10,
        dates: 10,
        kiwi: 10,
        null: 10,
        prunes: 10,
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
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
         submitCallback={submitCallback}
          />
    </div>
  );
}
 
export default Checkout;