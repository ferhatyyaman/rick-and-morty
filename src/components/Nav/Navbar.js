import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
    <ul className="nav-list">
        <div className="nav-div">
        <Link to="/">
          <h2>RİCK AND MORTY</h2>
          </Link>
       </div>
    <li className="nav-item">
        <Link to="/">Anasayfa</Link>
    </li>
     
      <li className="nav-item">
        <Link to="/favorite">Favoriler</Link>
    </li>
  
    </ul>
  </nav>
  )
}
