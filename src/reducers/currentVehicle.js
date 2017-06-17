import {combineReducers} from 'redux';
// import actions from '../actions';

/* eslint-disable no-unused-vars */
function loading(state = false, action) {
  return state;
}

function error(state = null, action) {
  return state;
}

function item(state = [], action) {
  return state;
}

const currentVehicle = combineReducers({
  loading,
  error,
  item
});

export default currentVehicle;
