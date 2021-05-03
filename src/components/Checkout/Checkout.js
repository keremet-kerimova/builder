import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div>
      <CheckoutSummary  />
    </div>
  );
}
 
export default Checkout;