
import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom'
import UserProfile from './components/UserProfile';

const App = () => {
 return(
    <Fragment>
        <NavBar />
        <Container>
          <Switch>
            <Route 
              exact 
              path="/" 
              render={ () => <div>Home</div> } 
            />
            <Route 
              exact 
              path="/user/profile" 
              render={ () => <UserProfile /> } 
            />
          </Switch>
        </Container>
      </Fragment>
 )
}

export default App;
