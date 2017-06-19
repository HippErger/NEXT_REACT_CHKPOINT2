import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import {initStore} from '../store';
import PropTypes from 'prop-types';

class VehicleDetails extends Component {
  // A lifecyle hook that allows us to trigger another function when it mounts
  componentDidMount() {
    this.props.onMount();
  }
  // class Components always have to have a render function
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
