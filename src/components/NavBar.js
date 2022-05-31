
import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="navbar" id="navBar">
        <div className="nav-bar-inside">
          <div>
            <NavLink className="link-prj naw-link" id="navForHome" to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className="link-prj naw-link" id="navForHome" to='/projects' exact={true} activeClassName='active'>
              Projects
            </NavLink>
          </div>
          <div>
            <NavLink className="link-prj naw-link" id="navForHome" to='/about-me' exact={true} activeClassName='active'>
              About Me
            </NavLink>
          </div>
        </div>

      </div >
    </nav >
  );
}

export default NavBar;
