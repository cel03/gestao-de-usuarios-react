import React from 'react'
import { storiesOf } from '@storybook/react'
import UserEdit from './index'

const user = {
  email: 'user1@gmail.com',
  name: 'User 1',
  password: 'teste'
}

storiesOf('Components|UserEdit', module)
  .add('Edição', () => <UserEdit {...user}/>)