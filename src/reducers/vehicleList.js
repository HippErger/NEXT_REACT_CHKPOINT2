import {combineReducers} from 'redux';
// import action from '../actions';


/* eslint-disable no-unused-vars */
function loading(state = false, action) {
  return state;
}

function error(state = null, action) {
  return state;
}

function items(state = [], action) {
  return state;
}

const vehicleList = combineReducers({
  loading,
  error,
  items
});

export default vehicleList;
