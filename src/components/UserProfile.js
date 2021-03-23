import React, {useContext} from 'react'
import { UserContext } from '../providers/UserProvider'
import User from './User'
import UserFuncForm from './UserFuncForm'
import ThisLoader from './ThisLoader'

const UserProfile = (props) => {
  const {initialLoadInProgress} = useContext(UserContext)
  if (initialLoadInProgress) return <ThisLoader />
  return(
    <div>
      <p>User Profile</p>
        <User />
        <UserFuncForm header={'User Form'} />
    </div>

  )
}

export default UserProfile