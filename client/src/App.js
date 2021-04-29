import "./App.css";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

// Components
import SinglePrice from "./components/SinglePrice";

// Utils
import API from "./utils/API";

function App() {
  console.log(API.getList())
  return (
    <div className="App">
      <header className="Title">CryptoTicker</header>
      <Link to="/Price"> Price </Link>
      <Link to="/Comparison"> Comparison </Link>
      <Link to="/AddFavorite"> Add to Favorites </Link>

      <Switch>
        <Route path="/">
          <SinglePrice />
        </Route>
        <Route path="/Comparison"></Route>
        <Route path="/AddFavorite"></Route>
      </Switch>
    </div>
  );
}

export default App;
