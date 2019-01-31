import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';
import ColorContext from '../context/colorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    // const text = this.context ;

    return (
      <ColorContext.Consumer>
        {(color) => 
          <button className={`ui ${color} button`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
