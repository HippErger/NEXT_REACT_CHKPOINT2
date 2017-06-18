// import 'isomorphic-fetch';
import 'whatwg-fetch';
export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS';
export const CREATE_VEHICLE_ERROR = 'CREATE_VEHICLE_ERROR';

// had on line 27
// .then( response => {
//   console.log('Create was a success, actions.js, 20', response);
//   return response.json();
// })

export function createNewVehicle(values) {
  console.log('actionjs, 13,', values);
  return dispatch => {
    dispatch({
      type: CREATE_VEHICLE,
    });
    console.log('actionjs, 18,', JSON.stringify(values));

    fetch('/api/vehicles', {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
    .then( response => {
      console.log('actionjs, 26,', JSON.stringify(values));
      console.log('Create was a success, actions.js, 20', response);
      return response.json();
    })
    .then(data => {
      if (data.message) {
        console.log('there was an error with the vehicle, actionsjs, 29', data.message);
        dispatch(createVehicleError(data.message));
      } else {
        console.log('the vehicle was created successfully, actionsjs, 28', data);
        dispatch(createVehicleSuccess(data));
      }
    })
    .catch(err => {
      console.log('Create Vehicle was a failure, actionsjs, 33', err);
    });
  };
}

function createVehicleError(message) {
  console.log('This is an error message from CreateVehicle', message);
  return {
    type: CREATE_VEHICLE_ERROR,
    message
  };
}

function createVehicleSuccess(item) {
  return {
    type: CREATE_VEHICLE_SUCCESS,
    item
  };
}

export const VEHICLE_LIST_LOAD = 'VEHICLE_LIST_LOAD';
export const VEHICLE_LIST_LOAD_SUCCESS = 'VEHICLE_LIST_LOAD_SUCCESS';
export const VEHICLE_LIST_LOAD_ERROR = 'VEHICLE_LIST_LOAD_ERROR';

export function vehicleListLoad() {
  return dispatch => {
    dispatch({
      type: VEHICLE_LIST_LOAD,
    });

    fetch('/api/vehicles')
      .then(result => {
        console.log('Vehicle list did load', result);
        return result.json();
      })
      .then(data => {
        console.log('result was wrung out in response.json into data', data);
        dispatch(vehicleListLoadSuccess(data));
      })
      .catch(err => {
        console.log('Vehicle list didn\'t load', err);
        dispatch(vehicleListLoadFailure(err.message));
      });
  };
}

function vehicleListLoadSuccess(recievedData) {
  return {
    type: VEHICLE_LIST_LOAD_SUCCESS,
    recievedData
  };
}

function vehicleListLoadFailure(message) {
  return {
    type: VEHICLE_LIST_LOAD_ERROR,
    message
  };
}
