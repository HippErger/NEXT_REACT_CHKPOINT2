import React, {Component} from 'react';
import Link from 'next/link';
import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import Header from '../components/Header';

class VehiclesPage extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  // const vehicle = props.resultData;
  // const vehicle = 1;
  // @TODO the vehicle in this if statement needs to be props, not a const
  render() {
    if (this.state.vehicle) {
      return (
        <div>
          <Header />
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
