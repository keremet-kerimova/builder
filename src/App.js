import Layout from "./components/Layout/Layout";
import DriedFruitsBuilder from "./components/DriedFruitsBuilder/Builder/DriedFruitsBuilder";
import "./App.css"
import Checkout from "./components/Checkout/Checout";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path="/" component={DriedFruitsBuilder} exact />
        <Route path="/checkout" component={Checkout}  />
        <Redirect to="/" />
        </Switch>
        
        
      </Layout>
    </div>
  );
}

export default App;
