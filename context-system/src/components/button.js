import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';
import ColorContext from '../context/colorContext';

class Button extends Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    // const text = this.context ;

    return (
      <ColorContext.Consumer>
        {(color) => 
          <button className={`ui ${color} button`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
