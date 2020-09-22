import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav className="navbar">
        <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/users/new">Create new user</Link>
        </div>
    </nav>
)

export default NavBar
