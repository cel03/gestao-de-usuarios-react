import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import Loading from "../Loading"

const UserEdit = () => {
  let { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const getAPI = async () => {
      try{
        const result = await axios(`http://localhost:8000/users/${id}/`);
        setData(result.data)
        setUser(result.data)
        console.log({...data})
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getAPI()
  }, [id])

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.name === 'is_staff' ? target.checked : target.value;
    const name = target.name;

    setUser({ ...user, [name]: value })
  }

  const updateUser = () => {
    //console.log({...user})
    axios.patch(`http://localhost:8000/users/${id}/`, {...user})
  }

  return (
    <React.Fragment>
    { isLoading
      ? <Loading />
      : hasError
        ? <div>Não foi possível encontrar o usuário...</div>
        : (
          <form onSubmit={(event)=> {
            event.preventDefault()
            updateUser()
          }}>
            <div className="form-group">
              <label htmlFor="userEmail">Endereço de email</label>
              <input type="email" readOnly className="form-control" id="userEmail" aria-describedby="emailHelp" value={user.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="userName">Nome</label>
              <input type="text" className="form-control" id="userName" name="name" value={user.name} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">Senha</label>
              <input type="password" className="form-control" id="userPassword" placeholder="Digite nova senha..."/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" name="is_staff" checked={user.is_staff} onChange={handleInputChange}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Is Staff</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        )
    }
    </React.Fragment>
  )
}

export default UserEdit