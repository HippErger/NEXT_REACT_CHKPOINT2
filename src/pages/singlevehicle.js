import React from 'react';
// import Link from 'next/link';
// import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import VehicleContainer from '../containers/VehicleContainer';
import Header from '../components/Header';

function singlevehicle() {
  return (
    <div>
      <Header />
      <h4>the single vehicles page</h4>
      <VehicleContainer />
    </div>
  );
}

export default withRedux(initStore, null, null)(singlevehicle);
