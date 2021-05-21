import DriedFruitsPrewiews from "../DriedFruitsPreviews/DriedFruitsPreviews";
import DriedFruitsControls from "../DriedFruitsControls/Controls/DriedFruitsControls";
import classes from "./DriedFruitsBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Modal from "../../Ul/Modal/Modal";
import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../../Ul/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../../store/actions/builder";
import withAxios from "../../withAxios";


const DriedFruitsBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null)
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);



  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    } 
    else{
      history.push('/auth')
    }
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.DriedFruitsBuilder}>
      <DriedFruitsPrewiews
        ingredients={ingredients}
        price={price} />
      <DriedFruitsControls
        ingredients={ingredients}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(DriedFruitsBuilder, axios)