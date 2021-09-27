import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";
import CocktailDetailsPage from "./views/CocktailDetailsPage";

import Home from "./views/Home";
import IngredientDetailPage from "./views/IngredientDetailPage";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ingredient/:name">
            <IngredientDetailPage></IngredientDetailPage>
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
