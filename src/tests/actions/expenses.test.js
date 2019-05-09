import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])


test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should edit expense action object', () => {
  const action = editExpense('123abcd', {note: 'New note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abcd',
    updates: {
      note: 'New note value'
    }
  })
})

test('Should set up add expense object with providec values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('Should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is great',
    createdAt: 10000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
      })
  })
})

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
      })
  })
})

//test('Should set up add expense object with default values', () => {
//  const action = addExpense()
//  expect(action).toEqual({
//    type: 'ADD_EXPENSE',
//    expense: {
//      id: expect.any(String),
//      description: '',
//      amount: 0,
//      createdAt: 0,
//      note: ''
//    }
//  })
//})