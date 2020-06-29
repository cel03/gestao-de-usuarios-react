import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from "../Loading"
import AlertSuccess from "../UI/AlertSuccess"

const UserAdd = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [user, setUser] = useState({})
  const [userAdded, setUserAdded] = useState(false)

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.name === 'is_staff' ? target.checked : target.value;
    const name = target.name;

    setUser({ ...user, [name]: value })
  }

  const addUser = async () => {
    try{
      await axios.post(`http://localhost:8000/users/`, {...user})
      setUserAdded(true)
    } catch {
    }
  }

  return (
    <React.Fragment>
    { isLoading
      ? <Loading />
      : hasError
        ? <div>Não foi possível encontrar o usuário...</div>
        : <React.Fragment>
            <AlertSuccess show={userAdded}/>
            <form onSubmit={(event)=> {
              event.preventDefault()
              addUser()
            }}>
              <div className="form-group">
                <label htmlFor="userEmail">Endereço de email</label>
                <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInputChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="userName">Nome</label>
                <input type="text" className="form-control" id="userName" name="name" value={user.name} onChange={handleInputChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Senha</label>
                <input type="password" className="form-control" id="userPassword" name="email"/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="is_staff" checked={user.is_staff} onChange={handleInputChange}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Is Staff</label>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </React.Fragment>
    }
    </React.Fragment>
  )
}

export default UserAdd