import {combineReducers} from 'redux';


// @TODO: remove overrides
/* eslint-disable no-unused-vars */


// here we create reducers for events... then move them to another file and
// import them to be combined into the rootReducer

// function loading(state = false, action) {
//   return state;
// }
//
// function error(state = false, action) {
//   return state;
// }
//
// function items(state = false, action) {
//   return state;
// }
//
// const state = {
//   eventList: {
//     loading: false,
//     error: null,
//     list: []
//   },
//   selectedEvent: {
//     loading: false,
//     error: null,
//     list: null
//   }
// };

import {
  VEHICLES_LOADED,
  ONE_VEHICLE_LOADED
} from '../actions';

// const rootReducer = (state = 0) => {
//   return state;
// };

function vehicles(state = [], action) {
  if (action.type === VEHICLES_LOADED) {
    console.log('Vehicles reducers is working', action.value);
    return action.value;
  }
  return state;
}

function vehicle(state = {}, action) {
  if (action.type === ONE_VEHICLE_LOADED) {
    console.log('single vehicle reducers is working', action.value);
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  vehicles, vehicle
});

export default rootReducer;
