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

  componentDidMount() {
    this.props.getVehicleDetails(this.VEHICLE_ID);
  }

  // class Components always have to have a render function
  render() {
    /* eslint-disable no-unused-vars */
    const {item, loading, error} = this.props;

    return (
      <div>
        <Header />
        <ul>
          <li>{item.year}</li>
          <li>{item.make}</li>
          <li>{item.model}</li>
          <li>{item.miles}</li>
          <li>{item.price}</li>
          <li>{item.city}</li>
        </ul>
      </div>
    );
  }
}

VehicleDetails.propTypes = {
  getVehicleDetails: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,

};

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    // onMount: () => {
    //
    // },
    getVehicleDetails: idValue => {
      console.log('received _id in props', idValue);
      dispatch(loadOneVehicle(idValue));
    }
  };
}

function mapStateToProps(state) {
  return {
    item: state.currentVehicle.item,
    loading: state.currentVehicle.loading,
    error: state.currentVehicle.error,
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(VehicleDetails);
