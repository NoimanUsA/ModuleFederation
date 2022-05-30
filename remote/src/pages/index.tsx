import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// Routes
import { Auth } from '@/pages/Auth';
import { ActualTasks } from "@/pages/ActualTasks/";
import { CompletedTasks } from "@/pages/CompletedTasks";
import { SecureRoute } from "./SecureRoute";
//Constants
import { URL } from "@/constants/routes";


export const Pages = () => (
  <Router basename="/">
    <Switch>
      <Route path={URL.AUTH} component={Auth} />
      <Route path={URL.TASKS} render={() => (<SecureRoute><ActualTasks /></SecureRoute>)} />
      <Route path={URL.COMPLETED_TASKS} render={() => <SecureRoute><CompletedTasks /></SecureRoute>} />

      <Redirect to={URL.TASKS} />
    </Switch>
  </Router>);

