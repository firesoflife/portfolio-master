import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../mobileMenu/_mobileMenu.scss';

const MobileNavbar = () => {
  return (
    <Fragment>
      <div id="mobile-nav" className="mobile-nav">
        <div className="menu">
          <input type="checkbox" className="toggler" />
          <div className="menu__hamburger">
            <div></div>
          </div>
          <div className="menu__content">
            <div>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/specialties">Specialties</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
