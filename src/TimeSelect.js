/*eslint no-unused-vars: 0*/

import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const countryOptions = [
  { key: 'me', value: 'me', text: 'Other' },
  { key: 'sc', value: 'sc', text: 'Sarah Conway' },
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
    text:   'Midnight',
    value:  'Me',
  },
  {
    key:    'Ranny Kang',
    text:   '8AM',
    value:  'Ranny Kang',
  },
  {
    key:    'Sarah Conway',
    text:   'Noon',
    value:  'Sarah Conway',
  },
  {
    key:    '5',
    text:   '5PM',
    value:  '5',
  },
  {
    key:    '9',
    text:   '9PM',
    value:  '9',
  },
]

const TimeSelect = () => (
  <span className="label-input100">
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)

export default TimeSelect
