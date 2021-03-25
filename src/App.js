import Layout from "./components/Layout/Layout";
import DriedFruitsBuilder from "./components/DriedFruitsBuilder/DriedFruitsBuilder";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Layout>
        <DriedFruitsBuilder />
      </Layout>
    </div>
  );
}

export default App;
