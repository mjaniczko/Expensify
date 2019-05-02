import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is form my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is form my add expense component
  </div>
)

const NotFoundPage = () => (
  <div>
    404! Page not found - <Link to='/'>GO HOME</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact>HOME</NavLink>
    <NavLink to='/create' activeClassName="is-active">CREATE EXPENSE</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact/>
        <Route path="/create" component={AddExpensePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById("app"));