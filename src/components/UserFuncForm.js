import {useState, useContext} from 'react'
import { Form } from 'semantic-ui-react'
import { UserContext } from '../providers/UserProvider'

const UserFuncForm = (props) => {
  const {email, firstName, lastName, favoriteColor, updateUser } = useContext(UserContext)
  const [user, setUser] = useState({firstName, lastName, email, favoriteColor})


  const handleChange = (e, { name, value }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    updateUser({...user})
  }

  return (
    <>
    <h1>{props.header}</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label='New First Name'
        value={user.firstName}
        type='text'
        name='firstName'
        onChange={handleChange}
      />
       <Form.Input 
        label='New Last Name'
        value={user.lastName}
        type='text'
        name='lastName'
        onChange={handleChange}
      />
       <Form.Input 
        label='New Email'
        value={user.email}
        type='email'
        name='email'
        onChange={handleChange}
      />
       <Form.Input 
        label='Favorite Color'
        value={user.favoriteColor}
        type='text'
        name='favoriteColor'
        onChange={handleChange}
      />
      <Form.Button>Add</Form.Button>
    </Form>

    </>
  )

}

export default UserFuncForm