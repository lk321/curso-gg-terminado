import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client'
import { userQuery } from '../graphql/queries'

export default ({ match: { params } }) => {
    const { data } = useQuery(userQuery, {
        variables: {
            id: parseInt(params.userId)
        }
    })

    const user = data ? data.user : null

    if (!user) return <h1>Loading...</h1>

    return (
        <div>
            <h1 className="title">{`${user.name} ${user.last_name}`}</h1>
            <h2 className="subtitle">
                {user.company ? <Link to={`/companies/${user.company.id}`}>{user.company.name}</Link> : 'NO COMPANY'}
            </h2>
            <div className="box">
                <p><strong>Alias:</strong> <small>{`@${user.name.charAt(0)}${user.last_name}`}</small></p>
                <p><strong>Position:</strong> <small>{user.position}</small></p>
                <p><strong>Address:</strong> <small>{user.email}</small></p>
                <p><strong>Github:</strong> <small><a target="_blank" rel="noopener noreferrer" href={`https://github.com/${user.github}`}>{user.github}</a></small></p>
            </div>
        </div>
    )
}