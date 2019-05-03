import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})



const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense)
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

const demoState = {
  expenses: [{
    id: 'adwafqwdfq',
    description: 'January rent',
    note: 'Final payment for the address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amout', //date or amount
    startDate: undefined,
    endData: undefined
  }
}

