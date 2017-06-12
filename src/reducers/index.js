import {combineReducers} from 'redux';

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
