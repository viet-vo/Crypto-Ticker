import "./App.css";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="Title">CryptoTicker</header>
      <input type="radio" value="sa" name="gender" /> 
      <input type="radio" value="sa" name="gender" /> 
      <input type="radio" value="sa" name="gender" /> 
      <Link>Price</Link>
      <Link>Comparison</Link>
      <Link>Graph</Link>

      <Switch>
        <Route />
        <Route />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
