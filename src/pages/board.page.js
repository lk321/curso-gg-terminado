import React from 'react'

import UserList from '../components/user-list.component'

import { useBoardUsers } from '../hooks'

const BoardPage = () => {
    const { users } = useBoardUsers()

    return (
        <div>
            <h1 className="title">User Board</h1>
            <UserList users={users} />
        </div>
    )
}

export default BoardPage