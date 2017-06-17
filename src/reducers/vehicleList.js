import {combineReducers} from 'redux';
import {
  VEHICLE_LIST_LOAD,
  VEHICLE_LIST_LOAD_SUCCESS,
  VEHICLE_LIST_LOAD_ERROR,

} from '../actions';
/*
export const VEHICLE_LIST_LOAD = 'VEHICLE_LIST_LOAD';
export const VEHICLE_LIST_LOAD_SUCCESS = 'VEHICLE_LIST_LOAD_SUCCESS';
export const VEHICLE_LIST_LOAD_ERROR = 'VEHICLE_LIST_LOAD_ERROR';*/

/* eslint-disable no-unused-vars */
function loading(state = false, action) {
  switch (action.type) {
    case VEHICLE_LIST_LOAD:
      return true;
    // this is a trick. It passes through on _SUCCESS and returns state unless it
    // the action.type is and _ERROR.
    case VEHICLE_LIST_LOAD_SUCCESS:
    case VEHICLE_LIST_LOAD_ERROR:
      return false;
  }
  return state;
}

function error(state = null, action) {
  return state;
}

function items(state = [], action) {
  switch (action.type) {
    case VEHICLE_LIST_LOAD_SUCCESS:
      return action.recievedData;
    case VEHICLE_LIST_LOAD_ERROR:
      return [];
  }
  return state;
}

const vehicleList = combineReducers({
  loading,
  error,
  items
});

export default vehicleList;
