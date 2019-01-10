import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './googleAuth';

const Header = () => {
  return (
    <div className="ui menu">
      <Link to="/" className="header item">
        Streaming App
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;