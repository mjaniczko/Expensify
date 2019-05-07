import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import ExpenseForm from '../../components/ExpenseForm'


test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})