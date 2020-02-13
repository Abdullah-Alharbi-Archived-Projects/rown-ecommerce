import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home.page.jsx";

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
