import React, { Fragment } from 'react';
import Footer from '../../Components/Footer/Footer';

import Profile from '../../Components/profile/Profile';

const Contact = () => {
  return (
    <div id="contact">
      <section className="home-d" id="contact" name={'contact'}>
        <div className="home-d--body">
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
            </ul>
          </div>
          <Profile />

          {/* <!-- -------------CONTACT FORM --> */}
          <div className="form">
            <div className="form__container">
              <form
                className="form__container--content"
                action="https://formspree.io/f/xoqpylyp"
                method="POST"
              >
                <div className="form__title">
                  <h3>Get in touch</h3>
                  <hr />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    name="name"
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
                    name="_replyto"
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
                  <button type="submit" value="Send" className="">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
