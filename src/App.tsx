import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import CocktailDetailsPage from "./views/CocktailDetailsPage";

import Home from "./views/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <CocktailDetailsPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
