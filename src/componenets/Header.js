import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
        </nav>
    )
}

export default Header
