import React from 'react';
import CollapsableMapper from './CollapsableMapper';
import PropTypes from 'prop-types';

function Vehicles(props) {
  return (
    <CollapsableMapper data={props.vehicles} path='vehicle' field='year'
      field1='make' field2='model' />
  );
}

Vehicles.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicles;


/*
import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

function Vehicles(props) {
  return (
    <CollapsableMapper data={props.vehicles} path="vehicle" field="year"
      field1="make" field2="model" />
  );
}

Vehicles.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicles;
*/
