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
          <div class="form-group">
            <label for="userEmail">Endereço de email</label>
            <input type="email" readonly class="form-control-plaintext" id="userEmail" aria-describedby="emailHelp" value={data.email}/>
          </div>
          <div class="form-group">
            <label for="userName">Nome</label>
            <input type="text" class="form-control" id="userName"/>
          </div>
          <div class="form-group">
            <label for="userPassword">Senha</label>
            <input type="password" class="form-control" id="userPassword"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Is Staff</label>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      )
    }
    </React.Fragment>
  )
}

export default UserEdit