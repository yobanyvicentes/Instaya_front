import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">INSTAYA</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/orders">Programar recogida</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='Active' exact aria-current="page" to="/order">Seguimiento de envío</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
