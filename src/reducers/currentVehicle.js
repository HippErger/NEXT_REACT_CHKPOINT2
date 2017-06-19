/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import {
  LOAD_ONE_VEHICLE,
  LOAD_ONE_VEHICLE_SUCCESS,
  LOAD_ONE_VEHICLE_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.typ) {
    case LOAD_ONE_VEHICLE:
      return true;
    // this is a trick. It passes through on _SUCCESS and returns state unless if
    // the action.type is and _ERROR.
    case LOAD_ONE_VEHICLE_SUCCESS:
    case LOAD_ONE_VEHICLE_FAILURE:
      return false;
  }
  return state;
}

function error(state = null, action) {
  return state;
}

function item(state = [], action) {
  switch (action.type) {
    case LOAD_ONE_VEHICLE_SUCCESS:
      return action.recievedData;
    case LOAD_ONE_VEHICLE_FAILURE:
      return [];
  }
  return state;
}

const currentVehicle = combineReducers({
  loading,
  error,
  item
});

export default currentVehicle;
