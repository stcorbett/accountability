/*eslint no-unused-vars: 0*/

import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const countryOptions = [
  { key: 'me', value: 'me', text: 'Other' },
  { key: 'sc', value: 'sc', text: 'Sean Corbett' },
  { key: 'rk', value: 'rk', text: 'Ranny Kang' },
]

// const CountryxDropdown = () => (
//   <Dropdown
//     placeholder='Who'
//     fluid
//     search
//     selection
//     default="sc"
//     options={countryOptions}
//   />
// )
const friendOptions = [
  {
    key:    'Me',
    text:   'Other',
    value:  'Me',
  },
  {
    key:    'Ranny Kang',
    text:   '2 Weeks',
    value:  'Ranny Kang',
  },
  {
    key:    'Sean Corbett',
    text:   '3 Weeks',
    value:  'Sean Corbett',
  },
  {
    key:    '5',
    text:   '4 Weeks',
    value:  '5',
  },
  {
    key:    '9',
    text:   '5 Weeks',
    value:  '9',
  },
]

const DateSelect = () => (
  <span className="label-input100">
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)

export default DateSelect
