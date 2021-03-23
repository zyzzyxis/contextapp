
// user has email, fname, lname, avatar, and otherstuff
// render a component to display the user's info
//update the user info and update throughout the application
//style the application. 

import React, {useState, useEffect} from 'react'

export const UserContext =  React.createContext();

export const UserConsumer =  UserContext.Consumer

const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  const [initialLoadInProgress, setInitialLoadInProgress] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      getData()
    }, 2000)
  },[])

  const getData = () => {
    setUser({
      firstName: 'Erin',
      lastName: 'Zimmerman',
      email: 'coolcoder@gmail.com',
      favoriteColor: 'Pink',
    })
    setInitialLoadInProgress(false)
  }

  return(
    <UserContext.Provider value={{...user, updateUser: setUser, initialLoadInProgress}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider