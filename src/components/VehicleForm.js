import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars*/
class VehicleForm extends Component {
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
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('from create vehicle page', event);
    this.props.onSubmit(this.state);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {imgURL, year, make, model, price, km, miles, fuel, city, newCar} = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

VehicleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};

export default VehicleForm;
