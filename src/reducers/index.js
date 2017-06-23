import {combineReducers} from 'redux';
import vehicleList from './vehicleList';
import createVehicle from './createVehicle';
import currentVehicle from './currentVehicle';
import deleteVehicle from './deleteVehicle';
import updateVehicleReducer from './updateVehicleReducer';

// here we create reducers for events... then move them to another file and
// import them to be combined into the rootReducers

export default combineReducers({
  vehicleList,
  createVehicle,
  currentVehicle,
  deleteVehicle,
  updateVehicleReducer
});
