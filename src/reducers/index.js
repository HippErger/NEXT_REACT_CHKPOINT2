import {combineReducers} from 'redux';
import vehicleList from './vehicleList';
import createVehicle from './createVehicle';
import currentVehicle from './currentVehicle';
import deleteVehicle from './deleteVehicle';

// here we create reducers for events... then move them to another file and
// import them to be combined into the rootReducer

export default combineReducers({
  vehicleList,
  createVehicle,
  currentVehicle,
  deleteVehicle
});
