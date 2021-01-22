import React, { Fragment } from 'react';
import Footer from '../../Components/Footer/Footer';

const Specialties = () => {
  return (
    <Fragment>
      <section className="specialties" id="specialties">
        <div className="content__container">
          <div className="content__specials">
            <div className="item-box">
              <div className="item-box__even item-box__icon">
                <i className="material-icons md-36">business</i>
              </div>
              <div className="item-box__text">
                <h3>Project Management</h3>
                <p>
                  Looking for a website? I specialize in building websites for
                  small and medium sized businesses who are looking to build
                  their web presence. I will take you through each step from
                  exploration and laying the ground work for your future home on
                  the web, through to the joyous end when that first visitor
                  cicks on your page!
                </p>
              </div>
            </div>
            <div className="item-box">
              <div className="item-box__odd item-box__icon">
                <i className="material-icons md-36">palette</i>
              </div>
              <div className="item-box__text">
                <h3>UX/UI Design</h3>
                <p>
                  The internet is an expansive jungle and good web design is
                  like a trusty machete. <br />
                  <br />
                  What do you do with your spare time? I read web design and
                  tech blogs ... and watch hockey. I will bring your site to
                  life using the latest and greatest designs and web standards
                  ensuring that visitors to your site can click around with
                  ease!
                </p>
              </div>
            </div>
            <div className="item-box">
              <div className="item-box__even item-box__icon">
                <i className="material-icons md-36">code</i>
              </div>
              <div className="item-box__text">
                <h3>The Nerdy Bits</h3>
                <p>
                  Bits and bytes and all things nice. I will tap away on my
                  keyboard entering random symbols and text in such a way that
                  when I'm done, it'll look like a website ... er ... no, it
                  WILL be a website.
                </p>
              </div>
            </div>
            <div className="item-box">
              <div className="item-box__odd item-box__icon">
                <i className="material-icons md-36">architecture</i>
              </div>
              <div className="item-box__text">
                <h3>technologies</h3>

                <div className="tech-box">
                  <div>
                    <h4>Current</h4>
                    <p>
                      <ul>
                        <li>• Wordpress</li>
                        <li>• Shopfiy</li>
                        <li>• HTML5</li>
                        <li>• CSS3</li>
                        <li>• Javascript </li>
                        <li>• Reactjs</li>
                        <li>• NPM</li>
                        <li>• Git / GitHub</li>
                        <li>• Netlify</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h4>Coming</h4>
                    <p>
                      <ul>
                        <li>• Angular</li>
                        <li>• MongoDB</li>
                        <li>• Vue.js</li>
                        <li>• Javascript</li>
                        <li>• Reactjs</li>
                        <li>• MySQL</li>
                        <li>• Ruby on Rails</li>
                        <li>• Python</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-special">
          <Footer />
        </div>
      </section>
    </Fragment>
  );
};

export default Specialties;
