import React from 'react'
import { storiesOf } from '@storybook/react'
import UserList from './index'

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
storiesOf('Components|UserList', module)
  .add('Listagem', () => <UserList users={users}/>)