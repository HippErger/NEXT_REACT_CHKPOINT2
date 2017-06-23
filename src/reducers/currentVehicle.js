/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import {
  LOAD_ONE_VEHICLE,
  LOAD_ONE_VEHICLE_SUCCESS,
  LOAD_ONE_VEHICLE_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_ONE_VEHICLE:
      return true;
    case LOAD_ONE_VEHICLE_SUCCESS:
    case LOAD_ONE_VEHICLE_FAILURE:
      return false;
  }
  return state;
}

function error(state = null, action) {
  return state;
}

function item(state = {}, action) {
  switch (action.type) {
    case LOAD_ONE_VEHICLE_SUCCESS:
      return action.receivedData;
    case LOAD_ONE_VEHICLE_FAILURE:
      return {};
  }
  return state;
}


const currentVehicle = combineReducers({
  loading,
  error,
  item
});

export default currentVehicle;
