import React, { Fragment } from 'react';

import SectionTitle from '../../Components/SectionTitle/SectionTitle';

// import ScrollableSection from 'react-update-url-on-scroll';

const Contact = () => {
  return (
    <Fragment>
      <section className="home-d" id="contact" name={'contact'}>
        <div className="home-d--body">
          {/* <!-- ----------PROFILE IMAGE ------------- --> */}
          <div className="profile">
            <div className="profile__title">
              <h3>Hello there, I'm Bryan</h3>
            </div>
            <div className="profile__img">
              <img src="img/profile.jpg" alt="" />
            </div>
            <div className="profile__tag">
              <p>Learn more about me on the about page!</p>
            </div>
            <div className="profile__btn--about">
              <a
                href="construction.html"
                target="_blank"
                className="btn--about"
              >
                go there
              </a>
            </div>
          </div>

          {/* <!-- -------- CONTACT & SOCIAL---------- --> */}
          <div className="contact">
            <h3>find me on the web</h3>
            <div className="section__title--bottom-line bottom-line-about"></div>
            <ul className="contact__items">
              <a href="mailto:bryan@excip.io" className="contact__item">
                <li>
                  <ion-icon name="send-outline"></ion-icon>
                  <span> email</span>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/bryan-goertz/"
                className="contact__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <span> linkedin</span>
                </li>
              </a>
              <a
                href="https://github.com/firesoflife"
                className="contact__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <ion-icon name="logo-github"></ion-icon>
                  <span> github</span>
                </li>
              </a>
              <a
                href="https://www.instagram.com/bryangoertz/"
                className="contact__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <span> instagram</span>
                </li>
              </a>
              <a
                href="https://www.facebook.com/bryan.d.goertz"
                className="contact__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <ion-icon name="logo-facebook"></ion-icon>
                  <span> facebook</span>
                </li>
              </a>
              <li>... Or simply fill out the contact form</li>
            </ul>
          </div>

          {/* <!-- -------------CONTACT FORM --> */}
          <div className="form">
            <div className="form__container">
              <form className="form__container--content">
                <div className="form__title">
                  <h3>Get in touch</h3>
                  <hr />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Name"
                    id="name"
                    required
                  />
                  <label for="name" className="form__label">
                    Full Name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    className="form__input"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <label for="email" className="form__label">
                    Email Address
                  </label>
                </div>

                <div className="form__group">
                  <input
                    className="form__input"
                    placeholder="Phone Number"
                    type="text"
                  />
                  <label for="phone" className="form__label">
                    Phone Number
                  </label>
                </div>

                <div className="form__group">
                  <textarea
                    row="8"
                    placeholder="Send a Message"
                    type="message"
                    name="message"
                    className="form__input"
                  ></textarea>
                  <label for="message" className="form__label">
                    Send me a message!
                  </label>
                </div>

                <div className="btn-form">
                  <button type="submit" className="">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
