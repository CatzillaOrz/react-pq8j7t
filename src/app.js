import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const CreatePage = () => (
  <div>
    This is from my createPage
    <Link to="/">go back</Link>
  </div>
);

const Edit = () => (
  <div>
    This is from my EditPage
    <Link to="/">go back</Link>
  </div>
);

const App = () => <div>Interesting</div>;

const NotFound = () => (
  <div>
    not found! <Link to="/">Go back</Link>
  </div>
);

const Help = () => (
  <div>
    no help! <Link to="/">Go back</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/create">
      Create
    </NavLink>
    <NavLink activeClassName="is-active" to="/edit">
      Edit
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <div>
        <Header />
        <Route path="/" component={App} exact={true} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit" component={Edit} />
        <Route path="/help" component={Help} />
        <Route path="*" component={NotFound} />
      </div>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
