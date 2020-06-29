import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserList from './components/UserList'
import UserEdit from './components/UserEdit'
import NavBar from './components/NavBar'

function App() {
  const users = [
    {
      email: 'user1@gmail.com',
      name: 'User 1'
    },
    {
      email: 'user2@gmail.com',
      name: 'User 2'
    }
  ]
  return (
    <div class="container.fluid">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <UserList users={users} />
        </Route>
        <Route path="/user/:id">
          <UserEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
