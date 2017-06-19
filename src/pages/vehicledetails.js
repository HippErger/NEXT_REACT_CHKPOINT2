import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import {initStore} from '../store';
import PropTypes from 'prop-types';

class VehicleDetails extends Component {
  // put an onMount function that loads the details of this vehicle.
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <div>
        <Header />
        <h3>This is the Vehicle Details Page</h3>
      </div>
    );
  }
}

VehicleDetails.propTypes = {
  onMount: PropTypes.func.isRequired
};

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log('vehicle detail page did load');
    }
  };
}

export default withRedux(initStore, null, mapDispatchToProps)(VehicleDetails);
