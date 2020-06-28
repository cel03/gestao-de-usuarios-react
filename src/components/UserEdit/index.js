import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserEdit = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAPI = async () => {
      const result = await axios(
        'http://localhost:8000/users/1/',
      );
      setData(result.data)
      setIsLoading(false)
    }

    getAPI()
  }, [])

  return (
    <React.Fragment>
    { isLoading
      ? <div>Loading...</div>
      : (
        <form>
          <div className="form-group">
            <label htmlFor="userEmail">Endereço de email</label>
            <input type="email" readOnly className="form-control-plaintext" id="userEmail" aria-describedby="emailHelp" value={data.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Nome</label>
            <input type="text" className="form-control" id="userName"/>
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Senha</label>
            <input type="password" className="form-control" id="userPassword"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
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