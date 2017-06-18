import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars*/
class VehicleForm extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
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
    const clearFormState = {
      image: '',
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

    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({...clearFormState});
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {image, year, make, model, price, km, miles, fuel, city, newCar} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="image link"
            value={image}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="year"
            placeholder="year"
            value={year}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="make"
            placeholder="make"
            value={make}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="model"
            placeholder="model"
            value={model}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={price}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="km"
            placeholder="km"
            value={km}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="miles"
            placeholder="miles"
            value={miles}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="fuel"
            placeholder="fuel"
            value={fuel}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="newCar"
            placeholder="True/False"
            value={newCar}
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
