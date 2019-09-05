import React from "react";
import { Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";


export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
