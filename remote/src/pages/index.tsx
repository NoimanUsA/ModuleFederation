import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// Routes
import { Auth } from '@/pages/Auth';
import { ActualTasks } from "@/pages/ActualTasks/";
import { CompletedTasks } from "@/pages/CompletedTasks";

//Constants
import { URL } from "@/constants/routes";


export const Pages = () => (
  <Router basename="/">
    <Switch>
      <Route path={URL.AUTH} component={Auth} />
      <Route path={URL.TASKS} component={ActualTasks} />
      <Route path={URL.DELETED_TASKS} component={CompletedTasks} />
      <Redirect to={URL.TASKS} />
    </Switch>
  </Router>);

