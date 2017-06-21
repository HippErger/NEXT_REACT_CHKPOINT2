import 'isomorphic-fetch';
// import 'whatwg-fetch';

export const DELETE_THIS_ITEM = 'DELETE_THIS_ITEM';

export function deleteThisItem(itemId) {
  console.log('received dispatch in actionjs, 7', itemId);
  return dispatch => {
    dispatch({
      type: DELETE_THIS_ITEM
    });

    fetch('/api/vehicles/' + itemId,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      console.log('delete happend in actionsjs, 18', itemId);
      dispatch(vehicleListLoad());
    });
  };
}

export const LOAD_ONE_VEHICLE = 'LOAD_ONE_VEHICLE';
export const LOAD_ONE_VEHICLE_SUCCESS = 'LOAD_ONE_VEHICLE_SUCCESS';
export const LOAD_ONE_VEHICLE_FAILURE = 'LOAD_ONE_VEHICLE_FAILURE';

export function loadOneVehicle() {
  console.log('loadOneVehicle was called in actions');
  return dispatch => {
    dispatch({
      type: LOAD_ONE_VEHICLE,
    });

    // this is hard-coded dummy id to see if we can load the details
    fetch('/api/vehicles/5931b7939985bb67ed8c7bfc')
      .then( result => {
        console.log('got a vehicle at actionjs, 17', result);
        return result.json();
      })
      .then( data => {
        console.log('data was reveived at actionsjs, 21', data);
        dispatch(oneVehicleLoadSuccess(data));
      })
      .catch(err => {
        console.log('there was an error at actionsjs, 25', err);
        dispatch(oneVehicleLoadFailure(err.message));
      });
  };
}

// these are function to be called and return through dispatches asyncronously
function oneVehicleLoadSuccess(recievedData) {
  return {
    type: LOAD_ONE_VEHICLE_SUCCESS,
    recievedData
  };
}

function oneVehicleLoadFailure(message) {
  return {
    type: LOAD_ONE_VEHICLE_FAILURE,
    message
  };
}

export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS';
export const CREATE_VEHICLE_ERROR = 'CREATE_VEHICLE_ERROR';

export function createNewVehicle(values) {
  console.log('actionjs, 39,', values);
  return dispatch => {

    fetch('http://localhost:3001/api/vehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
    .then(() => dispatch(vehicleListLoad()))
    .then(item => dispatch(createdVehicleSuccessfully(item)))
    .catch(err => {
      console.log('Create Vehicle was a failure, actionsjs, 33', err);
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
