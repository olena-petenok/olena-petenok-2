import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import MainPage from "../pages/MainPage";

import "./index.scss";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
