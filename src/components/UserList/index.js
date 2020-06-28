import React from 'react'
import { Link } from "react-router-dom";

const UserList = ({users}) => (
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user, i) => {
        return (
            <tr>
              <th scope="row">{i + 1}</th>
              <td><Link to={`/user/${i + 1}`}>{user.email}</Link></td>
              <td>{user.name}</td>
              <td>@mdo</td>
            </tr>
        )
      })
    }
  </tbody>
</table>
)

export default UserList