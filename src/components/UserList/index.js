import React from 'react'

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
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>@mdo</td>
        </tr>)
      })
    }
  </tbody>
</table>
)

export default UserList