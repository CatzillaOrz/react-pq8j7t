import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute
          path="/edit/:id"
          component={EditExpensePage}
          exact={true}
        />
        <Route path="/help" component={HelpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
