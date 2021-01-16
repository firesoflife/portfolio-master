import React, { Fragment } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { HeaderButton } from '../../Components/HeaderButton';

const Specialties = () => {
  return (
    <div className="container">
      <section className="home-a" id="specialties">
        <SectionTitle style={{ background: '$color-grey-dark' }} />

        <div className="home-a__content specials">
          <div className="specials__item">
            <div className="specials__item--icon-box-even specials__item-box">
              <i className="material-icons md-36">business</i>
            </div>
            <div className="specials__text-box">
              <h3>Project Management</h3>
              <p>
                Looking for a website? I specialize in building websites for
                small and medium sized businesses who are looking to build their
                web presence. I will take you through each step from exploration
                and laying the ground work for your future home on the web,
                through to the joyous end when that first visitor cicks on your
                page!
              </p>
            </div>
          </div>
          <div className="specials__item">
            <div className="specials__item--icon-box-odd specials__item-box">
              <i className="material-icons md-36">palette</i>
            </div>
            <div className="specials__text-box">
              <h3>UX/UI Design</h3>
              <p>
                The internet is an expansive jungle and good web design is like
                a trusty machete. <br />
                <br />
                What do you do with your spare time? I read web design and tech
                blogs ... and watch hockey. I will bring your site to life using
                the latest and greatest designs and web standards ensuring that
                visitors to your site can click around with ease!
              </p>
            </div>
          </div>
          <div className="specials__item">
            <div className="specials__item--icon-box-even specials__item-box">
              <i className="material-icons md-36">code</i>
            </div>
            <div className="specials__text-box">
              <h3>The Nerdy Bits</h3>
              <p>
                Bits and bytes and all things nice. I will tap away on my
                keyboard entering random symbols and text in such a way that
                when I'm done, it'll look like a website ... er ... no, it WILL
                be a website. <br />I currently enjoy creating websites with the
                following technologies:
              </p>
              <ul>
                <li>• Wordpress</li>
                <li>• Shopfiy</li>
                <li>• HTML5 & CSS3</li>
                <li>• Javascript </li>
                <li>• Reactjs</li>
                <li>• MySQL</li>
                <li>• GitHub</li>
                <li>• Netlify</li>
              </ul>
            </div>
          </div>
          <div className="specials__item">
            <div className="specials__item--icon-box-odd specials__item-box">
              <i className="material-icons md-36">architecture</i>
            </div>
            <div className="specials__text-box">
              <h3>E-Commerce</h3>
              <p>
                Got stuff to sell? Need a website with a shopping cart? Great,
                let's get started. Take your pick from Shopify or Woocommerce.
                Don't sweat the details, I'll get it sorted for you so you can
                focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
      {HeaderButton}
    </div>
  );
};

export default Specialties;
