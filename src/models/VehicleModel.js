import mongoose from 'mongoose';

const vehicleModel = mongoose.Schema({
  city: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  fuel: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  image: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  km: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  miles: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  make: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  model: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  newCar: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  price: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  year: {
    type: String,
    maxlength: [ 25, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
});


export default mongoose.model('Vehicle', vehicleModel);
