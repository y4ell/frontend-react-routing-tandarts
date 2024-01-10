import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li><NavLink
              className={({ isActive }) => isActive ? 'active-nav-link' : 'default-nav-link'}
              to='/'>
            Home
          </NavLink></li>
          <li><NavLink
              className={({ isActive }) => isActive ? 'active-nav-link' : 'default-nav-link'}
              to='/gaatjes'>
            Gaatjes
          </NavLink></li>
          <li><NavLink  className={({ isActive }) => isActive ? 'active-nav-link' : 'default-nav-link'}
                        to='/afspraken'>
            Afspraak maken
          </NavLink></li>
          <li><NavLink
              className={({ isActive }) => isActive ? 'active-nav-link' : 'default-nav-link'}
              to='/tanden-bleken'>
            Tanden bleken
          </NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;