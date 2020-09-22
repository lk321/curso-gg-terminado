import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ id, name, last_name, company }) => (
    <li className="media">
        <div className="media-content">
            <Link to={`/users/${id}`}>{`${name} ${last_name}`}</Link>{company && (<small> - {company.name}</small>)}
        </div>
    </li>
)

export default UserItem