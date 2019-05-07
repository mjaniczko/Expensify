import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import { addExpense } from './actions/expenses'


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));