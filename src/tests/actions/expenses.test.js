import { addExpense, editExpense, removeExpense} from '../../actions/expenses'

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
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 100000,
    note: 'This was last month rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})


test('Should set up add expense object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
})