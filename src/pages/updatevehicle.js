import React, {Component} from 'react';
// import {initStore} from '../store';
// import withRedux from 'next-redux-wrapper';
// import PropTypes from 'prop-types';
import VehicleForm from '../components/VehicleForm';
import Header from '../components/Header';
// import anaction from '../actions';

class updateVehicle extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>This is the update page</h4>
        <VehicleForm />
      </div>
    );
  }
}

export default updateVehicle;
