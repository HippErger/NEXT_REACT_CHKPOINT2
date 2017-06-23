import {combineReducers} from 'redux';
import {
  UPDATE_THIS_VEHICLE,
  VEHICLE_UPDATE_SUCCESS,
  VEHICLE_UPDATE_FAILURE
} from '../actions';

function loading(state = false, action) {
  switch (action.typ) {
    case UPDATE_THIS_VEHICLE:
      return true;
    case VEHICLE_UPDATE_SUCCESS:
    case VEHICLE_UPDATE_FAILURE :
      return false;
  }
  return state;
}

function error(state = null, action) {
  switch (action.type) {
    case VEHICLE_UPDATE_FAILURE:
      return action.message;
  }
  return state;
}

export default combineReducers({
  loading,
  error
});
