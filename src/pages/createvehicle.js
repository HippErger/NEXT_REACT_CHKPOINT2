import React, {Component} from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';

class createVehicle extends Component {
  constructor() {
    super();
    this.state = {
      imgURL: '',
      year: '',
      make: '',
      model: '',
      price: '',
      km: '',
      miles: '',
      fuel: '',
      city: '',
      newCar: ''
    };

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
    //   newCar: ''
    // };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log('from create vehicle page', event);
    this.props.onSubmit(
      this.state
    );
  };

  handleInputChange = event => {
    console.log('hello', event.target.value);
  }

  render() {
    return (
      <div>
        <Header />
        <h3>You can add a new vehicle here</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="imgUrl"
            placeholder="imgUrl"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="year"
            placeholder="year"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="make"
            placeholder="make"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="model"
            placeholder="model"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="km"
            placeholder="km"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="miles"
            placeholder="miles"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="fuel"
            placeholder="fuel"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="newCar"
            placeholder="True/False"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
          />
             &nbsp; &nbsp;
        </form>
        <Link href="/vehiclespage">
          <button >
            Take Me to All Cars
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>
            Home
          </button>
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps() {
  return {
    onSubmit: values => {
      console.log('Form was submitted', values);
    }};
}

export default withRedux(initStore, null, mapDispatchToProps)(createVehicle);
