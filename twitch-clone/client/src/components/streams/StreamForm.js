import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

  renderError({ error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field 
          name="title" 
          label="Enter a title" 
          component={this.renderInput}
        />
        <Field name="description" label="Enter a description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description!';
  }

  return errors
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
