import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <h2>Select a language
          <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
          <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
        </h2>
      </div>
    );
  }
}

export default LanguageSelector;