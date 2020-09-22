import React from 'react'

import UserItem from './user-item.component'

const UserList = ({ users }) => (
    <ul className="box">
        {users.map(user => <UserItem key={user.id} {...user} />)}
    </ul>
)

export default UserList