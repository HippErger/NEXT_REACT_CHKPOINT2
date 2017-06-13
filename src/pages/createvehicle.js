import React, {Component} from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

class createVehicle extends Component {
  constructor() {
    super();

    // const INITIAL_STATE = {
    //   imgURL: '',
    //   year: '',
    //   make: '',
    //   model: '',
    //   price: '',
    //   km: '',
    //   miles: '',
    //   fuel: '',
    //   city: '',
    //   newCar: Boolean
    // };
  }
  render() {
    return (
      <div>
        <Header />
        <h3>You can add a new vehicle here</h3>
        <form onSubmit={event => {
          event.preventDefault();
          console.log('from create vehicle page', event);
        }}>
          <input type="text" name="imgUrl" placeholder="imgUrl" />
          &nbsp; &nbsp;
          <input type="text" name="year" placeholder="year"/>
          <br />
          <br />
          <input type="text" name="make" placeholder="make"/>
          &nbsp; &nbsp;
          <input type="text" name="model" placeholder="model"/>
          <br />
          <br />
          <input type="text" name="price" placeholder="price"/>
          &nbsp; &nbsp;
          <input type="text" name="km" placeholder="km"/>
          <br />
          <br />
          <input type="text" name="miles" placeholder="miles"/>
          &nbsp; &nbsp;
          <input type="text" name="fuel" placeholder="fuel"/>
          <br />
          <br />
          <input type="text" name="city" placeholder="city"/>
          &nbsp; &nbsp;
          <input type="text" name="newCar" placeholder="newCar"/>
          <br />
          <br />
          <input type="submit" value="Submit" />
             &nbsp; &nbsp;
        </form>
        <Link href="/vehiclespage">
          <button >Take Me to All Cars</button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmit: () => {
//
//     }};
// }

export default withRedux(initStore, null, null)(createVehicle);
