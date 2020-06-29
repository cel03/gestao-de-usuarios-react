import React from 'react'
import { Link } from "react-router-dom";
import Loading from "../Loading"
import ActionButtons from "../UI/ActionButtons"
import axios from 'axios'

const UserList = ({isLoading, users, handleDeleteUserClick}) => (
  <React.Fragment>
    {isLoading
    ? <Loading />
    : (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return (
                  <tr>
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