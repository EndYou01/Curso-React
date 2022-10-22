import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    // <nav>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="./about">About</Link></li>
    //         <li><Link to="./login">Login</Link></li>
    //     </ul>
    // </nav>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">useContext</a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact='true' activeclassname='active' to="/" className="nav-item nav-link" aria-current="page">Home</NavLink>
                    <NavLink exact='true' activeclassname='active' to="/about" className="nav-item nav-link" >About</NavLink>
                    <NavLink exact='true' activeclassname='active' to="/login" className="nav-item nav-link" >Loggin</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
