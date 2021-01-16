import React from 'react';
import { NavLink } from 'react-router-dom';
import Specialties from '../../pages/Specialties/Specialties';
import './_navbar.scss';

const Navbar = () => {
  return (
    <nav id="main-nav" className="main-nav solid">
      <div className="logo">
        <h2>Bryan Goertz</h2>
        <hr />
        <p>I make web stuff</p>
      </div>
      <ul className="main-nav__items">
        <li>
          {/* <a
            href="/"
            className="main-nav__item"
            activeClassName="active"
            smooth="true"
            spy="true"
            duration={1000}
          ></a> */}
          <NavLink
            to="/home"
            className="main-nav__item"
            activeClassName="active"
            smooth="true"
            spy="true"
            duration={1000}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/specialties"
            activeClassName="active"
            spy="true"
            smooth="true"
            className="main-nav__item"
            duration={1000}
          >
            Specialties
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className="main-nav__item"
            activeClassName="active"
            spy="true"
            smooth="true"
            duration={1000}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a
            href="contact"
            className="main-nav__item"
            activeClassName="active"
            spy="true"
            smooth="true"
            duration={1000}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/construction"
            className="main-nav__item"
            activeClassName="active"
            spy="true"
            smooth="true"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/blog"
            // component={Blog}
            className="main-nav__item"
            activeClassName="active"
            spy="true"
            smooth="true"
          >
            Blog
          </a>
        </li>
      </ul>

      {/* Mobile Nav */}
      {/* <div id="mobile-nav" className="mobile-nav">
        <div className="menu">
          <input type="checkbox" className="toggler" />
          <div className="menu__hamburger">
            <div></div>
          </div>
          <div className="menu__content">
            <div>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#specialties">Specialties</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="construction.html">About</a>
                </li>
                <li>
                  <a href="construction.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
