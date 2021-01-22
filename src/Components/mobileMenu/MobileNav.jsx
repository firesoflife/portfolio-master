import React, { Fragment } from 'react';
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
      </div>
    </Fragment>
  );
};

export default MobileNavbar;
