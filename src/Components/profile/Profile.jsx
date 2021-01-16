import React, { Fragment } from 'react';

const Profile = () => {
  return (
    <Fragment>
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
          <a href="construction.html" target="_blank" className="btn--about">
            go there
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
