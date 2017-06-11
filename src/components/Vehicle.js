import React from 'react';
import PropTypes from 'prop-types';

function Vehicle(props) {
  const vehicle = props.resultData;
  if (!vehicle) {
    return (
      <div>
        <h4>Vehicle not found</h4>
      </div>
    );
  }
  return (
    <div>
      <h4>{vehicle.make}</h4>
      <ul>
        <li>{vehicle.model}</li>
        <li>{vehicle.year}</li>
        <li>{vehicle.miles}</li>
        <li>{vehicle.price}</li>
      </ul>
    </div>
  );
}

/*
Greeting.propTypes = {
  name: PropTypes.string
};
*/
Vehicle.propTypes = {
  resultData: PropTypes.object
};



export default Vehicle;
