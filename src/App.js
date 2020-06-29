import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserList from './components/UserList'
import UserEdit from './components/UserEdit'
import NavBar from './components/NavBar'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getAPI = async () => {
      try{
        const result = await axios(`http://localhost:8000/users/`);
        setUsers(result.data)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getAPI()
  }, [])

  return (
    <div class="container.fluid">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <UserList isLoading={isLoading} users={users} />
        </Route>
        <Route path="/user/:id">
          <UserEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
