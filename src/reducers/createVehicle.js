import {combineReducers} from 'redux';
import {
  CREATE_VEHICLE,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_ERROR,
} from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case CREATE_VEHICLE:
      return true;
    case CREATE_VEHICLE_SUCCESS:
    case CREATE_VEHICLE_ERROR :
      return false;
  }
  return state;
}

function error(state = null, action) {
  switch (action.type) {
    case CREATE_VEHICLE_ERROR:
      return action.message;
  }
  return state;
}

export default combineReducers({
  loading,
  error,
});
