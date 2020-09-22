import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { userQuery, addUserMutation } from '../graphql/queries'

export default ({ history }) => {
    const [formData, updateFormData] = useState({})
    const [addUser, { client }] = useMutation(addUserMutation)

    const handleChange = (event) => {
        const { name, value } = event.target;

        updateFormData({
            ...formData,
            [name]: value
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        addUser({
            variables: {
                user: formData
            }
        }).then(({ data: { user } }) => {
            if (user) {
                client.writeQuery({
                    query: userQuery,
                    variables: { id: user.id },
                    data: { user }
                })

                history.push(`/users/${user.id}`)
            }
        })
    }

    return (
        <div>
            <h1 className="title">New User</h1>
            <div className="box">
                <form>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" name="name" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Lastname</label>
                        <div className="control">
                            <input className="input" type="text" name="last_name" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Position</label>
                        <div className="control">
                            <input className="input" type="text" name="position" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control">
                            <input className="input" type="email" name="email" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Github user</label>
                        <div className="control">
                            <input className="input" type="text" name="github" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-link" onClick={handleClick}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
