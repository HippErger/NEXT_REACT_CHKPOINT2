export const VEHICLES_LOADED = 'VEHICLES_LOADED';
export const ONE_VEHICLE_LOADED = 'ONE_VEHICLE_LOADED';
export const VEHICLE_CREATE_ERROR = 'VEHICLE_CREATE_ERROR';
export const GET_VEHICLE_ERROR = 'GET_VEHICLE_ERROR';
export const GET_ALL_VEHICLES_ERROR = 'GET_ALL_VEHICLES_ERROR';

// @TODO confirm port number 3101 and figure out pathname (/api/...)
// http://localhost:3001/api/vehicles
export function loadVehicles() {
  return function (dispatch) {
    fetch('/api/vehicles')
    .then( response => {
      return response.json();
    }).then(vehicles => {
      dispatch(vehiclesLoaded(vehicles));
    })
    .catch(err => {
      console.log('An error occured during load vehicles', err);
      // dispatch(loadVehiclesError(message));
    });
  };
}

// function loadVehiclesError(message) {
//   type: GET_ALL_VEHICLES_ERROR,
//   message;
// }

function vehiclesLoaded(vehicles) {
  return {
    type: VEHICLES_LOADED,
    value: vehicles
  };
}

export function getVehicle(vehicleID) {
  return function (dispatch) {
    fetch('/api/vehicles/' + vehicleID)
    .then( response => {
      return response.json();
    })
    .then( vehicle => {
      dispatch(vehicleLoaded(vehicle));
    })
    .catch( err => {
      console.log(err, 'vehicle not loaded');
      // dispatch(getVehicleError());
    });
  };
}

// function getVehicleError(message) {
//   type: GET_VEHICLE_ERROR,
//   message;
// }

function vehicleLoaded(vehicle) {
  return {
    type: ONE_VEHICLE_LOADED,
    value: vehicle
  };
}

export function createVehicle(v) {
  return function (dispatch) {
    fetch('/api/vehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()))
      .catch( err => {
        console.log('There is an error in create vehcile', err);
        // dispatch(createVehicleError(err));
      });
  };
}
//
// function createVehicleError(message) {
//   type: VEHICLE_CREATE_ERROR,
//   message;
// }
