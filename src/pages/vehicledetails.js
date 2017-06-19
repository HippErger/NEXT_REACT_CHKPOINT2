import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import {initStore} from '../store';

class VehicleDetails extends Component {
  // put an onMount function that loads the details of this vehicle.
  render() {
    return (
      <div>
        <Header />
        <h3>This is the Vehicle Details Page</h3>
      </div>
    );
  }
}

export default withRedux(initStore, null, null)(VehicleDetails);
