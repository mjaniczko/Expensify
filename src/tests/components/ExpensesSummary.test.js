import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should correcly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
  expect(wrapper).toMatchSnapshot()
})

test('Should correcly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2232123665}/>)
  expect(wrapper).toMatchSnapshot()
})