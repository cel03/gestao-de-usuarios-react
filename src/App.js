import React from 'react';
import UserList from './components/UserList'

function App() {
  const users = [
    {
      email: 'user1@gmail.com',
      name: 'User 1'
    },
    {
      email: 'user2@gmail.com',
      name: 'User 2'
    }
  ]
  return (
    <div className="container">
      <UserList users={users} />
    </div>
  );
}

export default App;
