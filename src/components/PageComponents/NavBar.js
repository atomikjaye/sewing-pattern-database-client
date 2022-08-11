import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu fixed='top' pointing inverted>
      <Menu.Item as='a' header>
        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
        Sewing Pattern Db
      </Menu.Item>
      <Menu.Item as={NavLink} to="/"
        name='home'
      />
      <Menu.Item as={NavLink} to="/upload"
        name='Add Pattern'
      />
      {/* <Menu.Item as={NavLink} to="/form"
        name='Add Transaction'
      /> */}
    </Menu>
    // <div>Hi</div>
  )
}

export default NavBar