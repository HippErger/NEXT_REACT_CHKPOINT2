import React from 'react';
import Link from 'next/link';
import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

/* When you get back Clayton, just remember that the Express Practice has these examples.

We're going to create a stateless array and pass it to this page with a container

and inside this page I will put in components like Vehicles that contains a
collapsible mapper that contains a vehicle component for each item in the array.
*/

function VehiclesPage() {
  // const vehicle = props.resultData;
  const vehicle = 0;
  if (!vehicle) {
    return (
      <div>
        <h4>No vehicles found</h4>
        <VehiclesContainer />
        <Link href="/">
          <button>Home</button>
        </Link>
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
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default withRedux(initStore, null, null)(VehiclesPage);

// return (
//   <div>
//     <h3>This is the vehicles page</h3>
//     <Link href="/">
//       <button>Home</button>
//     </Link>
//   </div>
// );
