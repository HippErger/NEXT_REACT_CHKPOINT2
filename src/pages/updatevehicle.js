import React, {Component} from 'react';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import VehicleForm from '../components/VehicleForm';
import Header from '../components/Header';
import {updateThisVehicle} from '../actions';

class updateVehicle extends Component {
  render() {
    const id = this.props.url.query._id;

    return (
      <div>
        <Header />
        <h4>You are editing vehicle with id: {id} </h4>
        <VehicleForm
          onSubmit={values => {
            this.props.submitUpdate(values, id);
          }} />
      </div>
    );
  }
}

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    submitUpdate: (values, id) => {
      dispatch(updateThisVehicle(values, id));
    }
  };
}

updateVehicle.propTypes = {
  submitUpdate: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
  query: PropTypes.string,
  _id: PropTypes.string
};

export default withRedux(initStore, null, mapDispatchToProps)(updateVehicle);
