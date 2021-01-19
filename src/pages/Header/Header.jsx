import React, { Fragment } from 'react';
import './_header.scss';
import { HeaderButton } from '../../Components/HeaderButton';
import Footer from '../../Components/Footer/Footer';

const Header = () => {
  return (
    <Fragment>
      <section id="home">
        <header className="header-home">
          <div className="header-content">
            <div className="header-content__items">
              <h1 className="header-content__title">
                <span className="hello">Hello,</span> I'm Bryan: <br />
                <span className="span-title">
                  Web Designer <span> | </span> Developer{' '}
                </span>
              </h1>
              <p className="header-content__items--tag">
                Have a poke around and take a look at some of my work
              </p>
              <HeaderButton />
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </header>
      </section>
    </Fragment>
  );
};

export default Header;
