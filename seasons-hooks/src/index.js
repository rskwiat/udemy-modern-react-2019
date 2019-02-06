import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;

  if (errorMessage) {
    content = <div>{errorMessage}</div>
  } else if (lat) {
    content = <SeasonsDisplay lat={lat} />
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return (
    <div className="border red">
      {content}
    </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

