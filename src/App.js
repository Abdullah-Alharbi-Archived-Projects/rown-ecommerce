import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.page.jsx";
import Shop from "./pages/shop/shop.page";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
