import React from 'react'
import { Menu } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return(
      <UserConsumer>
        {(value) => (
          <Menu>
            <NavLink to="/">
              <Menu.Item>
                Home
              </Menu.Item>
            </NavLink>
            { !value.initialLoadInProgress && <NavLink to="/user/profile">
                <Menu.Item>
                  { value.firstName }
                </Menu.Item>
              </NavLink> }
          </Menu>
        )}
      </UserConsumer>
  )
}

export default NavBar;