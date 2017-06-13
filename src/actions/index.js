export const VEHICLES_LOADED = 'VEHICLES_LOADED';
export const ONE_VEHICLE_LOADED = 'ONE_VEHICLE_LOADED';

// @TODO confirm port number 3101 and figure out pathname (/api/...)
// http://localhost:3001/api/vehicles
export function loadVehicles() {
  return function (dispatch) {
    fetch('http://localhost:3101/api/vehicles')
    .then( response => {
      return response.json();
    }).then(vehicles => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: VEHICLES_LOADED,
    value: vehicles
  };
}

export function getVehicle(vehicleID) {
  return function (dispatch) {
    fetch('http://localhost:3101/api/vehicles/' + vehicleID)
    .then( response => {
      return response.json();
    })
    .then( vehicle => {
      dispatch(vehicleLoaded(vehicle));
    })
    .catch( err => {
      console.log(err, 'vehicle not loaded');
    });
  };
}

function vehicleLoaded(vehicle) {
  return {
    type: ONE_VEHICLE_LOADED,
    value: vehicle
  };
}

export function createVehicle(v) {
  return function (dispatch) {
    fetch('http://localhost:3101/api/vehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
