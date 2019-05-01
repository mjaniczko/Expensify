import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
    404! Page not found
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact/>
      <Route path="/create" component={AddExpensePage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById("app"));