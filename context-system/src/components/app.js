import React, { Component } from 'react';
import UserCreate from './userCreate';
import { LanguageStore } from '../context/languageContext';
import ColorContext from '../context/colorContext';
import LanguageSelector from './languageSelector';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector/>
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
