import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer" id="footer">
        <div className="footer__copyright">
          <p>
            Design + Code by Bryan Goertz
            <span> &copy; 2020 </span> <br />
            Technologies used: HTML5 <span>|</span> CSS3 <span>|</span> SASS
            <span>|</span> JAVASCRIPT <span>|</span> REACT
          </p>
        </div>

        <div className="footer__links">
          <a className="footer__links--link" href="#twitter">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a className="footer__links--link" href="#instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="footer__links--link" href="#linkedin">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a className="footer__links--link" href="#github">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
