import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className="about-background">
        <div className="container">
          <div className="page-title">
            <h1 className="about-title">About Me</h1>
          </div>
        </div>
        <div className="info-container">
          <div className="gallery"></div>
          <div className="bio"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
