import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeaderButton = () => {
  return (
    <Fragment>
      <Link to="/projects">
        <button className="header-btn btn">
          <span>See My Work</span>
        </button>
      </Link>
    </Fragment>
  );
};

export { HeaderButton };
