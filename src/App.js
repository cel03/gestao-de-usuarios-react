import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserList from './components/UserList'
import UserEdit from './components/UserEdit'
import NavBar from './components/NavBar'
import UserAdd from './components/UserAdd'
import axios from 'axios'

//TO DO: Utilizar Context
const App = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(0)
  const [userAdded, setUserAdded] = useState(false)
  const [userAddedError, setUserAddedError ] = useState(false)
  const [message, setMessage] = useState('')

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
  }, [forceUpdate])

  const handleDeleteUser = async (id) => {
    try{
        const result = await axios.delete(`http://localhost:8000/users/${id}/`)
        setForceUpdate(forceUpdate+1)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
  }

  const callbackUserAdd = async (user) => {
    try{
      await axios.post(`http://localhost:8000/users/`, {...user})
      setForceUpdate(forceUpdate+1)
      setMessage('Usuário cadastrado com sucesso!')
      setUserAddedError(false)
    } catch {
      setMessage('Falha ao cadastrar o usuário...')
      setUserAddedError(true)
    } finally {
      setUserAdded(true)
    }
  }

  return (
    <div class="container.fluid">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <UserList isLoading={isLoading} hasError={hasError} users={users} handleDeleteUserClick={handleDeleteUser} />
        </Route>
        <Route exact path="/user/add">
          <UserAdd callbackUserAdd={callbackUserAdd} setUserAdded={setUserAdded}
                    userAdded={userAdded} userAddedError={userAddedError}
                    message={message} />
        </Route>
        <Route path="/user/:id">
          <UserEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
