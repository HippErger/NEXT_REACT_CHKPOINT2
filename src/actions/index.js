export const VEHICLES_LOADED = 'VEHICLES_LOADED';
export const ONE_VEHICLE_LOADED = 'ONE_VEHICLE_LOADED';

// @TODO confirm port number 3101 and figure out pathname (/api/...)
export function loadVehicles() {
  return function (dispatch) {
    fetch('http://localhost:3101/vehicles')
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
    fetch('/vehicles/' + vehicleID)
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
