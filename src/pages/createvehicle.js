import React, {Component} from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import VehicleForm from '../components/VehicleForm';
import PropTypes from 'prop-types';

class createVehicle extends Component {

  render() {
    return (
      <div>
        <Header />
        <h3>You can add a new vehicle here</h3>
        <VehicleForm
          onSubmit={values => {
            this.props.onSubmit(values);
          }}
        />
        <Link href="/vehiclespage">
          <button >
            Take Me to All Cars
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>
            Home
          </button>
        </Link>
      </div>
    );
  }
}

createVehicle.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};

function mapDispatchToProps() {
  return {
    onSubmit: values => {
      console.log('Form dispatch was submitted', values);
    }};
}

export default withRedux(initStore, null, mapDispatchToProps)(createVehicle);
