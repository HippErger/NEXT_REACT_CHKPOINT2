import React, {Component} from 'react';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import VehicleForm from '../components/VehicleForm';
import Header from '../components/Header';
// import anaction from '../actions';

class updateVehicle extends Component {
  render() {
    const id = this.props.url.query._id;

    return (
      <div>
        <Header />
        <h4>This is the update page for id: </h4>
        {id}
        <VehicleForm
          onSubmit={values => {
            this.props.submitUpdate(values);
          }} />
      </div>
    );
  }
}

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    submitUpdate: values => {
      // Make and action to send the values to: updateThisVehicle
      console.log('submitUpdate was clicked', values);
    }
  };
}

updateVehicle.propTypes = {
  submitUpdate: PropTypes.func.isRequired,
  url: PropTypes.string,
  query: PropTypes.string,
  _id: PropTypes.string
};

export default withRedux(initStore, null, mapDispatchToProps)(updateVehicle);