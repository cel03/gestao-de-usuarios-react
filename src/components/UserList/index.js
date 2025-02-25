import React from 'react'
import { Link } from "react-router-dom";
import Loading from "../Loading"
import ActionButtons from "../UI/ActionButtons"

const UserList = ({isLoading, hasError, users, handleDeleteUserClick}) => (
  <React.Fragment>
    {isLoading
    ? <Loading />
    : hasError
      ? <div>Não foi possível buscar os usuários...</div>
      : (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return (
                  <tr key={user.id}>
                    <th scope="row">{i + 1}</th>
                    <td><Link to={`/user/${user.id}`}>{user.email}</Link></td>
                    <td>{user.name}</td>
                    <td><ActionButtons userId={user.id} callbackDeleteUserClick={handleDeleteUserClick} /></td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
      )
    }
  </React.Fragment>
)

export default UserList