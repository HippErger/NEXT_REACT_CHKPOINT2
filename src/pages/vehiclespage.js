import React from 'react';
import Link from 'next/link';
import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import Header from '../components/Header';

/* When you get back Clayton, just remember that the Express Practice has these examples.

We're going to create a stateless array and pass it to this page with a container

and inside this page I will put in components like Vehicles that contains a
collapsible mapper that contains a vehicle component for each item in the array.
*/

function VehiclesPage() {
  // const vehicle = props.resultData;
  const vehicle = undefined;
  if (!vehicle) {
    return (
      <div>
        <VehiclesContainer />
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <h4>No vehicles found</h4>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default withRedux(initStore, null, null)(VehiclesPage);

/*
const Page = ({ stars }) => <div>Next stars: {stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
*/
