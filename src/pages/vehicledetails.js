import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import {loadOneVehicle} from '../actions';

class VehicleDetails extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // static async getInitialProps({req}) {
  //   console.log('initProps');
  //   return req ? { _id: req.headers['_id'] } : { _id: navigator._id };
  // }

  // A lifecyle hook that allows us to trigger another function when it mounts
  componentDidMount() {
    this.props.onMount();
    // a function that gets the id of the individual
  }
  // class Components always have to have a render function
  render() {
    // @TODO in here we need to access state.currentVehicle.whatever-we-want
    console.log('from vehicle detail page', this.props);
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
      dispatch(loadOneVehicle());
    }
  };
}

export default withRedux(initStore, null, mapDispatchToProps)(VehicleDetails);
