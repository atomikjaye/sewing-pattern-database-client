import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <Menu pointing>
      {/* <Menu.Item as={NavLink} to="/"
        name='home'
      />
      <Menu.Item as={NavLink} to="/transactions"
        name='Transactions'
      />
      <Menu.Item as={NavLink} to="/form"
        name='Add Transaction'
      /> */}
    </Menu>
    // <div>Hi</div>
  )
}