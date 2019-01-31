import React, { Component } from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../context/languageContext';
import ColorContext from '../context/colorContext';

class App extends Component {
  state = {
    language: 'english'
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <h2>Select a language
          <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
        </h2>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
