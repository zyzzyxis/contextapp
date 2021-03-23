import React, {useContext} from 'react'
import { Card } from 'semantic-ui-react'
import { UserContext } from '../providers/UserProvider'

const User = () => {
  const {firstName, email, lastName, favoriteColor} = useContext(UserContext)

  return(
    <Card>
      <Card.Content>
        <Card.Header>{firstName} {lastName}</Card.Header>
        <Card.Meta>
          email: {email}
        </Card.Meta>
        <Card.Content>
          <p>Favorite Color: {favoriteColor}</p>
        </Card.Content>
      </Card.Content>
    </Card>
  )
}

export default User;