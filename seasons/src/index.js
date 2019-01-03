import './index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

class App extends Component {

  state = {
    lat: null,
    error: '',    
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );    
  }

  renderError(error) {
    return (
      <div className="ui container error">
        <h4> <i className='ban icon' /> {error} </h4>
      </div>
    );
  }

  renderContent() {
    const {
      lat,
      error,
    } = this.state;

    if (error && !lat) {
      return this.renderError(error)
    }

    if (!error && lat) {
      return <SeasonsDisplay lat={lat} />
    }

    return <Spinner message="Please accept location request" />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
};


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

