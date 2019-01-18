import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }


  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={}
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps,
  { fetchStream })(StreamEdit);
