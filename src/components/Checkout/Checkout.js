import  DriedFruitsPreviews from "../DriedFruitsBuilder/DriedFruitsPreviews/DriedFruitsPreviews";
import CheckoutForm from "./CheckoutForm/ChecoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";



const Checkout = ({ history }) => {
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: ingredients,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }
  
  return (
    <div className={classes.Checkout}>
      <DriedFruitsPreviews ingredients={ingredients} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default Checkout;

