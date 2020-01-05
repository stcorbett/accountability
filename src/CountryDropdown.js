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
    text:   'Other',
    value:  'Me',
  },
  {
    key:    'Ranny Kang',
    text:   'James I.',
    value:  'Ranny Kang',
  },
  {
    key:    'Sarah Conway',
    text:   'Jeff T.',
    value:  'Sarah Conway',
  },
]

const CountryDropdown = () => (
  <span className="label-input100">
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)

const CountryyDropdown = () => (
  <span>
    Accountable: {' '}
    <Dropdown text='Accountable' inline icon='filter'       defaultValue={friendOptions[0].value}>
      <Dropdown.Menu>
        <Input icon='search' iconPosition='left' className='search' />
        <Dropdown.Divider />
        <Dropdown.Header icon='tags' content='Tag Label' />
        <Dropdown.Menu scrolling>
          {friendOptions.map((option) => (
            <Dropdown.Item key={option.value} {...option} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  </span>
)


export default CountryDropdown
