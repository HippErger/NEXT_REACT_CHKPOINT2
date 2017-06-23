import 'isomorphic-fetch';

/* ///////////////////////////////////////////////////////////////////////////
                        Update Vehicle Details
/////////////////////////////////////////////////////////////////////////// */

export const UPDATE_THIS_VEHICLE = 'UPDATE_THIS_VEHICLE';
export const VEHICLE_UPDATE_SUCCESS = 'VEHICLE_UPDATE_SUCCESS';
export const VEHICLE_UPDATE_FAILURE = 'VEHICLE_UPDATE_FAILURE';

export function updateThisVehicle(values) {
  return console.log('from actionsjs, 12', values);

  // dispatch => {
  //   dispatch({
  //     type: UPDATE_THIS_VEHICLE
  //   });

    // fetch('/api/vehicles', {
    //   method: 'PUT',
    //   headers: {'Content-Type': 'application/json'}
    // })
    // .then(() => dispatch(updateVehicleSuccess()))
    // .then(() => dispatch(vehicleListLoad()))
    // .catch(err => dispatch(updateVehicleFailure(err.message)));
  // };
}

// function updateVehicleSuccess() {
//   return {
//     type: VEHICLE_UPDATE_SUCCESS
//   };
// }
//
// function updateVehicleFailure(errorMessage) {
//   return {
//     type: VEHICLE_UPDATE_FAILURE,
//     errorMessage
//   };
// }

/* ///////////////////////////////////////////////////////////////////////////
                          Delete Vehicle
/////////////////////////////////////////////////////////////////////////// */

export const DELETE_THIS_ITEM = 'DELETE_THIS_ITEM';
export const ITEM_TO_DELETE_FAILED = 'ITEM_TO_DELETE_FAILED';
export const ITEM_DELETED_SUCCESSFULLY = 'ITEM_DELETED_SUCCESSFULLY';

export function deleteThisItem(itemId) {
  return dispatch => {
    dispatch({
      type: DELETE_THIS_ITEM
    });

    fetch('/api/vehicles/' + itemId,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => dispatch(deleteItemSuccess()))
    .then(() => dispatch(vehicleListLoad()))
    .catch(err => {
      dispatch(itemFailedtoDelete(err.message));
    });
  };
}

function deleteItemSuccess() {
  return {
    type: ITEM_DELETED_SUCCESSFULLY,
  };
}

function itemFailedtoDelete(message) {
  return {
    type: ITEM_TO_DELETE_FAILED,
    message
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                        Load One Vehicle Details
/////////////////////////////////////////////////////////////////////////// */
export const LOAD_ONE_VEHICLE = 'LOAD_ONE_VEHICLE';
export const LOAD_ONE_VEHICLE_SUCCESS = 'LOAD_ONE_VEHICLE_SUCCESS';
export const LOAD_ONE_VEHICLE_FAILURE = 'LOAD_ONE_VEHICLE_FAILURE';

export function loadOneVehicle(id) {
  console.log('loadOneVehicle was called in actions and this was recieved', id);
  return dispatch => {
    dispatch({
      type: LOAD_ONE_VEHICLE,
    });

    fetch('/api/vehicles/' + id)
      .then( result => {
        console.log('got a vehicle at actionjs, 55', result);
        return result.json();
      })
      .then( data => {
        console.log('data was reveived at actionsjs, 59', data);
        dispatch(oneVehicleLoadSuccess(data));
      })
      .catch(err => {
        console.log('there was an error at actionsjs, 63', err);
        dispatch(oneVehicleLoadFailure(err.message));
      });
  };
}

// these are function to be called and return through dispatches asyncronously
function oneVehicleLoadSuccess(receivedData) {
  console.log('from actionsjs, 71', receivedData);
  return {
    type: LOAD_ONE_VEHICLE_SUCCESS,
    receivedData
  };
}

function oneVehicleLoadFailure(message) {
  return {
    type: LOAD_ONE_VEHICLE_FAILURE,
    message
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                        Create New Vehicle
/////////////////////////////////////////////////////////////////////////// */

export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS';
export const CREATE_VEHICLE_ERROR = 'CREATE_VEHICLE_ERROR';

export function createNewVehicle(values) {
  return dispatch => {

    fetch('http://localhost:3001/api/vehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
    .then(() => dispatch(vehicleListLoad()))
    .then(item => dispatch(createdVehicleSuccessfully(item)))
    .catch(err => {
      dispatch(createVehicleError(err));
    });
  };
}


function createVehicleError(message) {
  console.log('This is an error message from createVehicle', message);
  return {
    type: CREATE_VEHICLE_ERROR,
    message
  };
}

function createdVehicleSuccessfully(item) {
  console.log('in actionjs 145,', item);
  return {
    type: CREATE_VEHICLE_SUCCESS,
    item
  };
}

/* ///////////////////////////////////////////////////////////////////////////
                          Load Vehicle List
/////////////////////////////////////////////////////////////////////////// */

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
        return result.json();
      })
      .then(data => {
        dispatch(vehicleListLoadSuccess(data));
      })
      .catch(err => {
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
