import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import "./App.scss";
import Footer from "./theme/Footer";
import Navbar from "./theme/Navbar";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar></Navbar>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" component={lazy(() => import("./views/Home"))} />
            <Route path="/ingredient/:name" component={lazy(() => import("./views/IngredientDetailPage"))} />
            <Route path="/:id" component={lazy(() => import("./views/CocktailDetailsPage"))} />
          </Switch>
        </Suspense>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
