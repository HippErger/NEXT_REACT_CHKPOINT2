import React, {Component} from 'react';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import VehicleForm from '../components/VehicleForm';
import Header from '../components/Header';
// import anaction from '../actions';

class updateVehicle extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>This is the update page</h4>
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
      console.log('submitUpdate was clicked', values);
    }
  };
}

updateVehicle.propTypes = {
  submitUpdate: PropTypes.func.isRequired,
};

export default withRedux(initStore, null, mapDispatchToProps)(updateVehicle);
