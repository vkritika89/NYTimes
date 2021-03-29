// rsf
import React from "react";
import Home  from "../home/Home"

import { Route } from "react-router-dom";

import Details from '../home/Details';

function App(props) {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={Details} />
    </div>
  );
}

export default App;
