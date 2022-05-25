import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import { Auth } from './Auth';
import { ActualTasks } from "./ActualTasks";
import { DeletedTasks } from "./DeletedTasks";

//Constants
import { URL } from "@/constants/routes";


export const Pages = () => (
  <Router>
    <Route path={URL.AUTH} component={Auth} />
    <Route path={URL.TASKS} component={ActualTasks} />
    <Route path={URL.DELETED_TASKS} component={DeletedTasks} />
  </Router>);

