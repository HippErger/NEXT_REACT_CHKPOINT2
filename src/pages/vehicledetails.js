import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import {loadOneVehicle} from '../actions';

class VehicleDetails extends Component {
  constructor(props) {
    super(props);
  }

  VEHICLE_ID = this.props.url.query._id;
  // static async getInitialProps({req}) {
  //   console.log('initProps');
  //   return req ? { _id: req.headers['_id'] } : { _id: navigator._id };
  // }

  // A lifecyle hook that allows us to trigger another function when it mounts
  componentDidMount() {
    this.props.onMount();
    this.props.getVehicleDetails(this.VEHICLE_ID);
  }
  // class Components always have to have a render function
  render() {
    // @TODO in here we need to access state.currentVehicle.whatever-we-want
    return (
      <div>
        <Header />
        <h3>This is the Vehicle Details Page</h3>
        <h2>{this.VEHICLE_ID}</h2>
      </div>
    );
  }
}

VehicleDetails.propTypes = {
  onMount: PropTypes.func.isRequired,
  getVehicleDetails: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
};

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadOneVehicle());
    },
    getVehicleDetails: idValue => {
      console.log('received _id in props', idValue);
      dispatch(() => {});
    }
  };
}

export default withRedux(initStore, null, mapDispatchToProps)(VehicleDetails);
